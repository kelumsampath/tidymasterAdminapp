import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class AcceptedJobs extends Component{
  render(){
    return(
      <View>
        <Text style={{color:"red"}}
        onPress={()=>Actions.screen2()}
        >pending</Text>
        
      </View>
    );
  }
}