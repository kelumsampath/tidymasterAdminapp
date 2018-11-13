import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          />
          <List
          style={{
            marginTop:120
          }}
          >
            <ListItem
            onPress={()=>Actions.screen1()}>
            <Text>screen1</Text>
            </ListItem>

            <ListItem
            onPress={()=>Actions.screen2()}>
            <Text>screen2</Text>
            </ListItem>

            <ListItem
            onPress={()=>Actions.screen3()}>
            <Text>screen3</Text>
            </ListItem>

            <ListItem
            onPress={()=>Actions.CreateNewAdmin()}>
            <Text>Create new admin</Text>
            </ListItem>

            <ListItem
            onPress={()=>Actions.logout()}>
            <Text>Logout</Text>
            </ListItem>

          </List>
        </Content>
      </Container>
    );
  }
}
