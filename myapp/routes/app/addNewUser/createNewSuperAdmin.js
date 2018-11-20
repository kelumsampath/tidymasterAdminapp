import React, { Component } from 'react';
import { View, Text,ScrollView, TouchableOpacity, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
var config=require('./../../../screen/config');

export default class CreateNewSuperAdmin extends Component{
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
        role:"superadmin",
        address:"",
        company:"NO",
        token:null,
        firstnamevalidate:false,
        lastnamevalidate:false,
        usernamevalidate:false,
        emailvalidate:false,
        phonenovalidate:false,
        nicvalidate:false,
        addressvalidate:false,
        gendervalidate:false

    }
    handlefistname=(text)=>{
      if(this.validatetext(text)){
        this.setState({firstname:text})
        this.setState({firstnamevalidate:true})
      }else{
        this.setState({firstnamevalidate:false})
      }
      }
    handlelastname=(text)=>{
   if(this.validatetext(text)){
        this.setState({lastname:text})
        this.setState({lastnamevalidate:true})
      }else{
        this.setState({lastnamevalidate:false})
      }
    }
    handleusername=(text)=>{
      let reg = /^[a-zA-z0-9]+$/;
    if(reg.test(text)){
      this.setState({username:text})
      this.setState({usernamevalidate:true})
    }else{
      this.setState({usernamevalidate:false})
    }
    }
    handleemail=(text)=>{
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(reg.test(text)){
        this.setState({email:text})
        this.setState({emailvalidate:true})
      }else{
        this.setState({emailvalidate:false})
      }
    }
    handlephoneno=(text)=>{
      let reg = /^[0-9]+$/;
    if(reg.test(text)){
      this.setState({phoneno:text})
      this.setState({phonenovalidate:true})
    }else{
      this.setState({phonenovalidate:false})
    }
    }
    handlenic=(text)=>{
      let reg = /^[a-zA-z0-9]+$/;
    if(reg.test(text)){
      this.setState({nic:text})
      this.setState({nicvalidate:true})
    }else{
      this.setState({nicvalidate:false})
    }
    }
    // handlegender=(text)=>{
    // this.setState({gender:text})
    // }
    handleaddress=(text)=>{
      let reg = /^[a-zA-z0-9,.]+$/;
    if(reg.test(text)){
      this.setState({address:text})
      this.setState({addressvalidate:true})
    }else{
      this.setState({addressvalidate:false})
    }
    }
    handletoken=(text)=>{
    this.setState({token:text})
    }
    onSelect(index,value){
      if(value!=null){
        this.setState({gender:value})
        this.setState({gendervalidate:true})
      }else{
        this.setState({gendervalidate:false})
      }
    }
    validatetext(text){
      alph=/^[a-zA-Z]+$/
      if(alph.test(text)){
        return true;
      }else{
        return false;
      }
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
        fetch(config.config.hostname+'/admin/specialuser', {
          method: 'POST',
          headers: {
            "Authorization": this.state.token,
            'Content-Type': 'application/json',
            'accessresource':'registersuperadmin' 
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
            <TextInput style = {[styles.input,!this.state.firstnamevalidate?styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "Firstname"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlefistname}/>

            <Text>lastname:</Text>
            <TextInput style = {[styles.input,!this.state.lastnamevalidate?styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "Lastname"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlelastname}/>
            
            <Text>Username:</Text>
            <TextInput style = {[styles.input,!this.state.usernamevalidate?styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleusername}/>

            <Text>Email:</Text>
            <TextInput style = {[styles.input,!this.state.emailvalidate?styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleemail}/>
            
            
            <Text>Phone Number:</Text>
            <TextInput style = {[styles.input,!this.state.phonenovalidate?styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlephoneno}/>

            <Text>NIC Number:</Text>
            <TextInput style = {[styles.input,!this.state.nicvalidate?styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "NIC"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlenic}/>
            
            <Text>Gender:</Text>
              <RadioGroup style = {[!this.state.gendervalidate?styles.error:null]}
              onSelect = {(index, value) => this.onSelect(index, value)}
              >
              <RadioButton value={'Male'} >
                <Text>Male</Text>
              </RadioButton>
      
              <RadioButton value={'Female'}>
                <Text>Female</Text>
              </RadioButton>
              </RadioGroup>
            
      
            
            <Text>Address:</Text>
            <TextInput style = {[styles.input,!this.state.addressvalidate?styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleaddress}/>
            
            <TouchableOpacity
               //style = {styles.submitButton}
               style={this.state.firstnamevalidate && this.state.lastnamevalidate && this.state.usernamevalidate && this.state.emailvalidate && this.state.phonenovalidate && this.state.nicvalidate && this.state.gendervalidate && this.state.addressvalidate ? styles.submitButton : styles.disabled}
               onPress = {
                  () => this.createnewadmin()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

             <TouchableOpacity
               //style = {styles.submitButton}
               style={this.state.firstnamevalidate && this.state.lastnamevalidate && this.state.usernamevalidate && this.state.emailvalidate && this.state.phonenovalidate && this.state.nicvalidate && this.state.gendervalidate && this.state.addressvalidate ? styles.disabled : styles.submitButtonInvalid }
               >
               <Text style = {styles.submitButtonText}>Invalid form filling </Text>
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
    submitButtonInvalid: {
      backgroundColor: 'red',
      padding: 10,
      margin: 15,
      height: 40,
      marginBottom:40
   },
    submitButtonText:{
       color: 'white'
    },
    error:{
      borderWidth:3,
      borderColor:'red'
    }
  })
  