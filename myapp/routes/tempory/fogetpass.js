import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, View, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';
import { Container, Content, Text, List, ListItem, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
var config = require('./../../screen/config');
var appinit = require('./../../screen/appint');

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable={true}
                maxLength={100}
            />
        );
    }
}

export default class deleteuser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }



    fogotpassword() {
        //alert(this.state.token)
        fetch(config.config.hostname + '/user/fogetpassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username:this.state.text
          })
    
        })
    
          .then((response) => response.json())
          .then((res) => {
    
            if (res.state === true) {
              alert(res.msg) 
              Actions.login()
            } else {
              alert(res.msg)
            }
          })
          .done();
      }

    // If you type something in the text box that is a color, the background will change to that
    // color.
    render() {
        return (
            <View>
                <Text style={{top:80}}>Username:</Text>
                <View style={styles.textfild}
                >
                    <UselessTextInput
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <View style={styles.containerbtn}>
                <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () =>this.fogotpassword()
               }>
               <Text style = {styles.submitButtonText}> Send New Password </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.cancelButton}
               onPress = {
                  () => Actions.login()
               }>
               <Text style = {styles.submitButtonText}> Cancel </Text>
            </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textfild: {
        top: 100,
        backgroundColor: '#B3AEAD',
        borderBottomColor: '#000000',
        borderBottomWidth: 1
    },
    containerbtn: {
        top:200,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonContainer: {
        flex: 1,
    },
    submitButton: {
        backgroundColor: '#FF3D00',
        padding: 10,
        margin: 15,
        height: 40,
     },

     cancelButton: {
        backgroundColor: '#858180',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     }
})
