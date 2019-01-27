import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet , AsyncStorage, Image } from 'react-native';
import { Container,Content, Item, Icon, Input, H2, Form, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
var config=require('./../../screen/config');

class Login extends Component{

  constructor(props){
    super(props);
    this.getToken();
  }
  state={
  };
  
  async setToken(mytoken){
    try{
      await AsyncStorage.setItem("token",mytoken);
      //this.getToken();
    }catch(error){
      alert("token store error");
    }
  }
  async getToken(){
    try{
      let thistoken=await AsyncStorage.getItem("token");
      //let a=JSON.stringify(thistoken)
      //alert(a)
      if(thistoken!=null){
        Actions.screen1()
      }else{
        Actions.login();
      }
    }catch(error){
      alert("token get error");
    }
  }

  

  render(){
    return(
      <Container style = {styles.container}>
        <Content style={styles.content}>
        <Image source={require('./../../images/logo.png')}  style={styles.img} />

              
            </Content>
         </Container>
    );
  }
}



const styles = StyleSheet.create({
    container:{
      padding:6,
      backgroundColor:'#00BFFF'
    },
    content:{
      marginTop: 150,
    },
    header:{
      alignItems:"center",
      textAlign:"center",
      marginTop:20,
      marginBottom:30,
      fontFamily: 'Iowan Old Style'
    },
    img:{
      width:145,
      height:120,
      alignSelf:"center",
      marginTop:20,
      borderWidth: 4,
      borderColor: "#ffffff",
    },
    txtBox:{
     backgroundColor:'#ffffff',
     marginTop:5,
     height:60,
    },
    blockUnderLogin: {
      flex:1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center'
    },
    forgot:{
      flex:1,
      alignItems:"center",
      marginTop:20,
      color:'#C0C0C0',
      fontFamily: 'Iowan Old Style'
    },
    signBtn:{
      marginTop: 5
    }
  })


export default Login;