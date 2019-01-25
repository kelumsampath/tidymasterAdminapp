import React from "react";
import { AppRegistry, Image, StatusBar, AsyncStorage, StyleSheet } from "react-native";
import {
    Button,
    Text,
    Separator,
    List,
    ListItem,
    Content,
    View, Body, Icon, Left
} from "native-base";
import { Actions } from "react-native-router-flux";
var appint = require('./../../../screen/appint');

export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.getToken()

    }
    state = {
        token: ""
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
                appint.profdata(this.state.token)
            } else {
                Actions.login();
            }
        } catch (error) {
            alert(error);
            Actions.login();
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>


                <View style={{ flex: 1, overflow: 'hidden', alignItems: 'center', backgroundColor: '#5297e4' }}>
                    <Image square style={styles.avatar} source={{ uri: appint.data.picurl }} />
                    <Text style={styles.name}>{appint.data.username}</Text>
                </View>


                <View style={{ flex: 2 }}>
                    <Content>
                        <List>
                            <Separator bordered noTopBorder />

                            <ListItem icon onPress={() => Actions.screen1()}>
                                <Left>
                                    <Button style={{ backgroundColor: "#FF9501" }}>
                                        <Icon active name="briefcase" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={styles.description}>Screen 1</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon onPress={() => Actions.screen2()}>
                                <Left>
                                    <Button style={{ backgroundColor: "#000000" }}>
                                        <Icon active name="contact" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={styles.description}>Monthly Views</Text>
                                </Body>
                            </ListItem>

                            <Separator bordered />

                            <ListItem icon onPress={() => Actions.searchuser()}>
                                <Left>
                                    <Button style={{ backgroundColor: "#4CDA64", marginTop: 2 }}>
                                        <Icon active name="add" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={styles.description}>Search User</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon onPress={() => Actions.CreateNewUser()}>
                                <Left>
                                    <Button style={{ backgroundColor: "#4CDA64", marginTop: 2 }}>
                                        <Icon active name="send" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={styles.description}>Create User</Text>
                                </Body>
                            </ListItem>

                            <Separator bordered />

                            <ListItem icon onPress={() => Actions.JobReview()}>
                                <Left>
                                    <Button style={{ backgroundColor: "#4CDA64", marginTop: 2 }}>
                                        <Icon active name="log-out" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={styles.description}>Job Review</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon onPress={() => Actions.ReviewComplaigns()}>
                                <Left>
                                    <Button style={{ backgroundColor: "#4CDA64", marginTop: 2 }}>
                                        <Icon active name="log-out" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={styles.description}>Review Complain</Text>
                                </Body>
                            </ListItem>

                            <Separator bordered noTopBorder />

                            <ListItem icon onPress={() => Actions.logout()}>
                                <Left>
                                    <Button style={{ backgroundColor: "#4CDA64", marginTop: 2 }}>
                                        <Icon active name="log-out" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={styles.description}>Log Out</Text>
                                </Body>
                            </ListItem>

                        </List>
                    </Content>
                </View>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 5,
        fontWeight: "400",
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 30
    },
    name: {
        fontSize: 23,
        color: "#ffffff",
        fontWeight: "600",
        marginTop: 160
    },
    info: {
        fontSize: 15,
        color: "#ffffff",
        marginTop: 2,
    },
})