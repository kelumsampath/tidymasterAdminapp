import React from "react";
import { AppRegistry, Image, StatusBar,AsyncStorage } from "react-native";
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
var appint=require('./../../../screen/appint');

export default class SideBar extends React.Component {
  constructor(props){
    super(props)
    this.getToken()
    
  }
  state={
    token:""
  }
  handletoken=(text)=>{
    this.setState({token:text})
  }

  async getToken(){
    try{
      let thistoken=await AsyncStorage.getItem("token");
     // let token=JSON.stringify(thistoken)

      //alert(a)
      if(thistoken!=null){
        this.handletoken(thistoken);
        appint.profdata(this.state.token)
      }else{
        Actions.login();  
      }
    }catch(error){
      alert(error);
      Actions.login();
    }
  }

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
              height: 130,
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
                appint.data.picurl
            }}
          />
          <Text
          style={{
            position: "absolute",
            alignSelf: "center",
            top: 105
          }}
          >{appint.data.username}</Text>
          <List
          style={{
            marginTop:130
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
            onPress={()=>Actions.CreateNewSuperAdmin()}>
            <Text>Create new superAdmin</Text>
            </ListItem>

            <ListItem
            onPress={()=>Actions.CreateNewAdmin()}>
            <Text>Create new admin</Text>
            </ListItem>

            <ListItem
            onPress={()=>Actions.CreateNewAdvertiser()}>
            <Text>Create new advertiser</Text>
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
