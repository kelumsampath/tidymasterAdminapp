import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen1 extends Component{
  render(){
    return(
      <View>
        <Text style={{color:"red"}}
        onPress={()=>Actions.screen2()}
        >Register</Text>
        
      </View>
    );
  }
}