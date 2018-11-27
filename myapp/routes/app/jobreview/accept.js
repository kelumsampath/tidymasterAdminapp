import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, View, TextInput, Button, StyleSheet } from 'react-native';
import { Container, Content, Text, List, ListItem, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
var appinit = require('./../../../screen/appint');

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
            text: 'Useless Multiline Placeholder',
        };
    }

    // If you type something in the text box that is a color, the background will change to that
    // color.
    render() {
        return (
            <View>
                <Text>Post Id: {appinit.data.postid}</Text>
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
                  () =>Actions.pop()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => Actions.pop()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textfild: {
        top: 100,
        backgroundColor: '#7a42f4',
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
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     }
})
