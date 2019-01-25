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

export default class Accept extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Correct job post',
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

    adminreview() {
        //alert(this.state.token)
        fetch(config.config.hostname + '/admin/acceptpost', {
          method: 'POST',
          headers: {
            "Authorization": this.state.token,
            'Content-Type': 'application/json',
            "accessresource":'jobpostreview'
          },
          body: JSON.stringify({
            postid:appinit.data.postid,
            reason:this.state.text
          })
    
        })
    
          .then((response) => response.json())
          .then((res) => {
    
            if (res.state === true) {
              Actions.JobReview();
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
                <Text>Post Id: {appinit.data.postid}</Text>
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
                  () =>this.adminreview()
               }>
               <Text style = {styles.submitButtonText}> Accept </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.cancelButton}
               onPress = {
                  () => Actions.JobReview()
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
        backgroundColor: '#2A8F1D',
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
