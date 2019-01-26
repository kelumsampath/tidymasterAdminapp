import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,AsyncStorage
} from 'react-native';
var config = require('./../../screen/config');
import { Actions } from 'react-native-router-flux';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.getToken();
  }

  state = {
    token: "",
    data: []
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
    fetch(config.config.hostname+'/user/profile', {
      method: 'GET',
      headers: {
        "Authorization": this.state.token,
        'Content-Type': 'application/json'
      }
      
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
             
              <View style={styles.starContainer}>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
             </View>
             <Text></Text>
             <Text></Text>
             <Text></Text>
            
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#4169E1",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
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