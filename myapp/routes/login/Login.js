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
    username:'',
    password:''
  };
  handleUsername=(text)=>{
    this.setState({username:text})
  }
  handlePassword =(text)=>{
    this.setState({password:text})
  }
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
      }
    }catch(error){
      alert("token get error");
    }
  }

  login(username,password){
    fetch(config.config.hostname+'/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
  })

      .then((response) => response.json())
      .then((res) => {

          if (res.state === true) {
            if(res.user.role=='admin'||res.user.role=='superadmin'){
              this.setToken(res.token);
              Actions.screen1();
            }else{
              alert(res.user.role+' NOT A ADMIN USER');
            }
              
          } else {
              
              alert(res.msg)
          }
      })
      .done();
  }

  render(){
    return(
      <Container style = {styles.container}>
        <Content style={styles.content}>
        <Image source={require('./../../images/logo.png')}  style={styles.img} />

        <H2 style={styles.header}> ADMIN LOGIN </H2>

        <Form>
            
              <Item rounded style={styles.txtBox}>
                    <Icon active name='contact'/>
                    <Input placeholder='Username' 
                           onChangeText = {this.handleUsername}/> 
                 </Item>
            

            <Item rounded style={styles.txtBox}>
                    <Icon active name='key'/>
                    <Input placeholder='Password' 
                           onChangeText = {this.handlePassword}/> 
                 </Item>

                </Form>

        

            <Button style={styles.signBtn} full rounded info
                  onPress = {() => this.login(this.state.username, this.state.password)}>
                   <Text> Login  </Text> 
             </Button>

             <View style={styles.blockUnderLogin}>
            <TouchableOpacity onPress={()=>Actions.fogetpassword()}>
              <Text style={styles.forgot}> Forget password ? </Text>
            </TouchableOpacity>

          </View>
              
            </Content>
         </Container>
    );
  }
}



const styles = StyleSheet.create({
    container:{
      padding:6,
      backgroundColor:'#F5F5F5'
    },
    content:{
      marginTop: 30
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
      marginTop:20
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