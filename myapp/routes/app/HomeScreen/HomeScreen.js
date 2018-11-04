import React from "react";
import { View, Text ,TouchableOpacity,StyleSheet, Button} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
      <Text style={{color:"red"}}>First page</Text>
      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.props.navigation.navigate('fourth')
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
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