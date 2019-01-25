import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, View, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';
import { Container, Content, Text, List, ListItem, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
var appinit = require('./../../../screen/appint');
var config = require('./../../../screen/config');

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
            text: 'delete user',
        };
        this.getToken();
    }

    handletoken = (text) => {
        this.setState({ token: text })
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

    deletemyuser() {
        //alert(this.state.token)
        fetch(config.config.hostname + '/admin/complaineduserremove', {
          method: 'POST',
          headers: {
            "Authorization": this.state.token,
            'Content-Type': 'application/json',
            "accessresource":'complainview'
          },
          body: JSON.stringify({
            uid:appinit.data.compuid,
            complainid:appinit.data.complainid,
            reason:this.state.text
          })
    
        })
    
          .then((response) => response.json())
          .then((res) => {
    
            if (res.state === true) {
              alert(res.msg) 
              Actions.ReviewComplaigns();
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
                <Text>User Id: {appinit.data.compuid}</Text>
                <Text style={{top:80}}>Comments:</Text>
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
                  () =>this.deletemyuser()
               }>
               <Text style = {styles.submitButtonText}> Delete </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.cancelButton}
               onPress = {
                  () => Actions.ReviewComplaigns()
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
