import React from "react";
import { View, Text ,AsyncStorage, Alert } from 'react-native';

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
            {text:'No', onPress:()=>this.props.navigation.navigate('Home')}
            ],
            { cancelable: false}
        )
    }
    async removeToken(){
            try{
                let thistoken=await AsyncStorage.removeItem("token");
                alert("You are sucessfuly loggedout");
                this.props.navigation.navigate('login');
                //alert(a)
            }catch(error){
                alert("token get error");
                this.props.navigation.navigate('Home');
            }
      }

    render() {
    return (
      <View>
      
    </View>
    );
  }
  
}