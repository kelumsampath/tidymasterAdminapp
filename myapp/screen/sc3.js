import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen3 extends Component{
  render(){
    return(
      <View>
        <Text style={{color:"red"}}
         onPress={()=>Actions.screen1()}
        >screen3</Text>

      </View>
    );
  }
}