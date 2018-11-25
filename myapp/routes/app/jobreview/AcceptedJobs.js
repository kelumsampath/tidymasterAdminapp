
import React, { Component } from 'react';

import { Container, Content, Text, List, ListItem, Thumbnail } from 'native-base';
import CompleteFlatList from 'react-native-complete-flatlist';
var config=require('./../../../screen/config');


export default class AcceptedJobs extends Component {
  constructor(props){
    super(props);
    this.getallacceptedjobpost();
  }
  state={
    token:"",
    data:[]
  }

  async getToken(){
    try{
      let thistoken=await AsyncStorage.getItem("token");
     // let token=JSON.stringify(thistoken)

      //alert(a)
      if(thistoken!=null){
        this.handletoken(thistoken);
      }else{
        Actions.login();  
      }
    }catch(error){
      alert(error);
      Actions.login();
    }
  }


  handletoken=(text)=>{
    this.setState({token:text})
    }

  getallacceptedjobpost(){
    //alert(this.state.token)
    fetch(config.config.hostname+'/admin/adminalljobs', {
      method: 'POST',
      headers: {
        "Authorization": this.state.token,
        'Content-Type': 'application/json',
 
      },
     
  })

      .then((response) => response.json())
      .then((res) => {

          if (res.state === true) {
            var jobpost=res.jobs;
            //console.warn(jobpost)
            this.setState( { data: jobpost });
          } else {
              alert(res.msg)
          }
      })
      .done();
  }

  cell = (data,index) => {
    const item = data.cleanData ? data.cleanData : data

    //console.log(data.cleanData)
    //console.log('data.cleanData will be not null if search bar is not empty. caution, data without search is not same like data with search due to implement the highlight component. data.cleanData is equal to data')

    //console.log('this is index number : '+index)

    //console.log(item+' this is original data')
    return (
          <List>
              <ListItem>
                  <Thumbnail square size={80} source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }} />
                  <Text>{data.title}</Text>
                  <Text note>{data.levelofjob}</Text>
              </ListItem>
          </List>
      
      );
  }

  render() {
    const { navigation } = this.props;
    return (
      <CompleteFlatList
      searchKey={['title', 'status', 'time', 'date']}
      highlightColor="yellow"
      pullToRefreshCallback={() => {
       // alert('refreshing');
      }}
      data={this.state.data}
      renderSeparator={null}
      renderItem={this.cell}
    />
    );
  }
}
