import React from "react";
import { View, Text ,AsyncStorage, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
var config = require('./../../../screen/config')

export default class Logout extends React.Component {
    constructor(props){
        super(props);
        this.getToken();
        this.getDecision();
      }
      state={
        decision:'',
        token:""
      };

    handletoken=(text)=>{
      this.setState({token:text})
    }

    getDecision(){
        Alert.alert(
            'Logout comfirmation',
            'do you want to logout?',
            [
            {text:'Yes', onPress:()=>this.requestlogout()},
            {text:'No', onPress:()=>Actions.pop()}
            ],
            { cancelable: false}
        )
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

    requestlogout(){
        fetch(config.config.hostname+'/user/logout', {
            method: 'GET',
            headers: {
              "Authorization": this.state.token,
              'Content-Type': 'application/json'
            }
            
        })
      
            .then((response) => response.json())
            .then((res) => {
      
                if (res.state === true) {
                  this.removeToken()
                  
                } else {
                    alert(res.msg)
                }
            })
            .done();
    }
    async removeToken(){
            try{
                let thistoken=await AsyncStorage.removeItem("token");
                alert("You are sucessfuly loggedout");
                Actions.login();
                //alert(a)
            }catch(error){
                alert("token get error");
                Actions.pop();
            }
      }

    render() {
    return (
      <View>
      
    </View>
    );
  }
  
}