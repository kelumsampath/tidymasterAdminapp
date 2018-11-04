import React from "react";
import { View, Text , AsyncStorage} from 'react-native';

export default class third extends React.Component {
  constructor(props){
    super(props);
    this.getToken();
  }
  
async getToken(){
    try{
      let thistoken=await AsyncStorage.getItem("token");
      let a=JSON.stringify(thistoken)
      alert(a)
    }catch(error){
      alert("token get error");
    }
  }
  render() {
    return (
      <View>
      <Text style={{color:"red"}}>third page</Text>
    </View>
    );
  }
}