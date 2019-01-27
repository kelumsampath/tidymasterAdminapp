import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,AsyncStorage
} from 'react-native';
var config = require('./../../screen/config');
var appinit = require('./../../screen/appint');
import { Actions } from 'react-native-router-flux';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.getToken();
  }

  state = {
    token: "",
    data: [],
    username:appinit.data.username
  }

  handletoken = (text) => {
    this.setState({ token: text });
    this.GetProfile();
  }

  async getToken() {
    try {
      let thistoken = await AsyncStorage.getItem("token");
      // let token=JSON.stringify(thistoken)

      //alert(a)
      if (thistoken != null) {
        this.handletoken(thistoken);
      } else {
        Actions.login();
      }
    } catch (error) {
      alert(error);
      Actions.login();
    }
  }


  GetProfile() {
    //alert(this.state.token)
    fetch(config.config.hostname+'/admin/userprofile', {
      method: 'POST',
      headers: {
        "Authorization": this.state.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username":this.state.username
      }),
      
  })

      .then((response) => response.json())
      .then((res) => {

          if (res.state === true) {
            this.setState({ data: res.userdata });
          } else {
              alert(res.msg)
          }
      })
      .done();
}
  


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{ uri: this.state.data.photourl }}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.data.firstName} {this.state.data.lastName}</Text>
              <Text style={styles.info}>{this.state.data.username} </Text>
              <Text>Role: {this.state.data.rolename} </Text>
             
             <Text></Text>
             <Text>Email: {this.state.data.email} </Text>
             <Text>NIC: {this.state.data.nic} </Text>
             <Text>Phone: {this.state.data.telephone} </Text>
             <Text>Gender: {this.state.data.gender} </Text>
             <Text>Address: {this.state.data.address} </Text>
             <Text></Text>
             
            </View>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#ADADAD",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:5
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:3
  },
  star:{
    width:40,
    height:40,
  }
});