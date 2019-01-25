import React, { Component } from 'react';
import { View, Text,WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen2 extends Component{
  render(){
    return(
      <WebView 
      originWhitelist={['*']}
      source={{ html: '<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR7hZ14t0hZQDBG-jhd0JG_U7_oQHtFj9mJtYtC31uaNQPg4hDlOjGZnunTxGUfGP5we7CIcMJ47XAY/pubchart?oid=1068427974&amp;format=interactive"></iframe>' }}
    />
    );
  }
}