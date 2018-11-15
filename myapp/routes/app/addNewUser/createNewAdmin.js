import React, { Component } from 'react';
import { View, Text,ScrollView, TouchableOpacity, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CreateNewAdmin extends Component{
    constructor(props){
        super(props);
        this.getToken();
    }
    state={
        firstname:"",
        lastname:"",
        username:"",
        email:"",
        phoneno:"",
        nic:"",
        gender:"",
        role:"admin",
        address:"",
        company:"NO",
        token:null
    }
    handlefistname=(text)=>{
        this.setState({firstname:text})
      }
    handlelastname=(text)=>{
    this.setState({lastname:text})
    }
    handleusername=(text)=>{
    this.setState({username:text})
    }
    handleemail=(text)=>{
    this.setState({email:text})
    }
    handlephoneno=(text)=>{
    this.setState({phoneno:text})
    }
    handlenic=(text)=>{
    this.setState({nic:text})
    }
    handlegender=(text)=>{
    this.setState({gender:text})
    }
    handleaddress=(text)=>{
    this.setState({address:text})
    }
    handletoken=(text)=>{
    this.setState({token:text})
    }

    async getToken(){
        try{
          let thistoken=await AsyncStorage.getItem("token");
         // let token=JSON.stringify(thistoken)

          //alert(a)
          if(thistoken!=null){
            this.handletoken(thistoken);
          }else{
            Actions.login();  
          }
        }catch(error){
          alert(error);
          Actions.login();
        }
      }

    createnewadmin(){
        //alert(this.state.token)
        fetch('http://192.168.43.107:3000/admin/specialuser', {
          method: 'POST',
          headers: {
            "Authorization": this.state.token,
            'Content-Type': 'application/json',
            'accessresource':'registeramin' 
          },
          body: JSON.stringify({
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            username:this.state.username,
            email:this.state.email,
            gender:this.state.gender,
            phoneno:this.state.phoneno,
            nic:this.state.nic,
            role:this.state.role,
            address:this.state.address,
            company:this.state.company
          }),
      })
    
          .then((response) => response.json())
          .then((res) => {
    
              if (res.state === true) {
                alert(res.msg)
                Actions.CreateNewAdmin()
              } else {
                  alert(res.msg)
              }
          })
          .done();
      }
    
  render(){
    return(
      <ScrollView style = {styles.container}>
            <Text>Firstname:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Firstname"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlefistname}/>

            <Text>lastname:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Lastname"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlelastname}/>
            
            <Text>Username:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleusername}/>

            <Text>Email:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleemail}/>
            
            
            <Text>Phone Number:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlephoneno}/>

            <Text>NIC Number:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "NIC"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlenic}/>
            
            <Text>Gender:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlegender}/>
            
            <Text>Address:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleaddress}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.createnewadmin()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 23,
       height:500
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
       marginBottom:40
    },
    submitButtonText:{
       color: 'white'
    }
  })
  