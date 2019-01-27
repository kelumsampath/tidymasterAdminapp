import React, { Component } from "react";
import { TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native'
import { Container, Button, Content, List, ListItem, Body, Text  } from "native-base";
import { Actions } from 'react-native-router-flux';
var config = require('./../../screen/config');
var appinit = require('./../../screen/appint');

export default class Actioncomplainview extends Component {

  constructor(props){
    super(props);
    this.state={
      cmpid:appinit.data.complnid,
      data2:[],
      token:""
    }
    
}


  handletoken(text){
    this.setState({token:text})
  }
  

  async getToken(){
    try{
      let thistoken=await AsyncStorage.getItem("token");
      this.handletoken(thistoken);
      this.getaction()
    }catch(error){
      alert(error);
    }
  }

  componentWillMount(){
  this.getToken()
  }

 

  getaction(){
    fetch(config.config.hostname+'/admin/viewcomplainaction', {
      method: 'POST',
      headers: {
        'Authorization':this.state.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "complainid":this.state.cmpid
      }),    
  }).then((response) => response.json())
    .then((res) => {
          if (res.state === true) {
            this.setState({data2:res.action})
            
          } else {
              
          }
      })
      .done();
  }

    render() {
      return (
        <Container>
          <Content>
                  <Text>Action</Text>
                  <Text note>Action ID : {this.state.data2.actionId}</Text>
                  <Text note>Action : {this.state.data2.action}</Text>
                  <Text note>Action taken by (user ID) : {this.state.data2.uid}</Text>
          </Content>
        </Container>
      );
    }
  }


  const styles = StyleSheet.create({
    confirm:{
    marginTop:20,
    marginHorizontal:5
    }
  })