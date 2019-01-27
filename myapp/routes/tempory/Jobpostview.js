import React, { Component } from "react";
import { TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native'
import { Container, Button, Content, List, ListItem, Body, Text  } from "native-base";
import { Actions } from 'react-native-router-flux';
var config = require('./../../screen/config');
var appinit = require('./../../screen/appint');

export default class CusJobDetails extends Component {

  constructor(props){
    super(props);
    this.state={
      postid:appinit.data.jobpostid,
      data:[],
      token:this.props.token
    }
    
}


  handletoken(text){
    this.setState({token:text})
  }
  

  async getToken(){
    try{
      let thistoken=await AsyncStorage.getItem("token");
      this.handletoken(thistoken);
      this.getSingleJob()
    }catch(error){
      alert(error);
    }
  }

  componentWillMount(){
  this.getToken()
  }

  getSingleJob(){
    fetch(config.config.hostname+'/customer/singlejob', {
      method: 'POST',
      headers: {
        'Authorization':this.state.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "postid":this.state.postid
      }),    
  }).then((response) => response.json())
    .then((res) => {
          if (res.state === true) {
            this.setState({data:res.customerjobs})
            
          } else {
              
          }
      })
      .done();
  }

    render() {
      return (
        <Container>
          <Content>
            <List dataArray={this.state.data} renderRow={(item) =>
            
              <ListItem >
                <Body>
                
                  <Text>{item.title}</Text>
                  <Text note>{item.dateandtime}</Text>
                  <Text note>{item.estimatedtime}</Text>
                  <Text note>{item.jobid}</Text>
                  <Text note>{item.numberofcleaners}</Text>
                  <Text note>{item.status}</Text>
                  <Text note>{item.paymentstatus}</Text>
                  <Text note>{item.cleanerId}</Text>
                 
                </Body>
              </ListItem>
              }>
            </List>
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