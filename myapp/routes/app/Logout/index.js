import React from "react";
import { View, Text ,AsyncStorage, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Logout extends React.Component {
    constructor(props){
        super(props);
        this.getDecision();
      }
      state={
        decision:'',
      };
    getDecision(){
        Alert.alert(
            'Logout comfirmation',
            'do you want to logout?',
            [
            {text:'Yes', onPress:()=>this.removeToken()},
            {text:'No', onPress:()=>Actions.pop()}
            ],
            { cancelable: false}
        )
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