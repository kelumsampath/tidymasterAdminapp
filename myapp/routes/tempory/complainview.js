import React, { Component } from "react";
import { TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native'
import { Container, Button, Content, List, ListItem, Body, Text  } from "native-base";
import { Actions } from 'react-native-router-flux';
var config = require('./../../screen/config');
var appinit = require('./../../screen/appint');

export default class Complainview extends Component {

  constructor(props){
    super(props);
    this.state={
      cmpid:appinit.data.complnid,
      data:[],
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
      this.getcomplain()
    }catch(error){
      alert(error);
    }
  }

  componentWillMount(){
  this.getToken()
  }

  getcomplain(){
    fetch(config.config.hostname+'/admin/viewcomplain', {
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
            this.setState({data:res.complain})
            
          } else {
              
          }
      })
      .done();
  }

    render() {
      return (
        <Container>
          <Content>
            
                
                  <Text>Job Title :{this.state.data.complainid}</Text>
                  <Text note>Description : {this.state.data.complain}</Text>
                  <Text note>Date and Time : {this.state.data.dateandtime}</Text>
                  <Text note>Post ID : {this.state.data.postid}</Text>
                <Button style={styles.signBtn} full rounded info
                  onPress = {() => {
                    appinit.data.jobpostid=this.state.data.postid;
                    Actions.Jobpostview();
                  }}>
                   <Text> View Job  </Text> 
             </Button>
                  <Text note>User ID : {this.state.data.uid}</Text>
                <Button style={styles.signBtn} full rounded info
                   onPress = {
                    () => {
                      appinit.data.username=this.state.data.username;
                      Actions.Userprofile();
                    }
                  }>
                   <Text> View USer  </Text> 
             </Button>
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