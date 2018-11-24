
import React, { Component } from 'react';

import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import CompleteFlatList from 'react-native-complete-flatlist';
var config=require('./../../../screen/config');


const data = [
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Syah', status: 'Active', time: '9:14 PM', date: '1 Dec 2018' },
  { name: 'Izzat', status: 'Active', time: '8:15 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  {
    name: 'Muhyiddeen',
    status: 'Blocked',
    time: '10:10 PM',
    date: '9 Feb 2018',
  },
];




export default class AcceptedJobs extends Component {
  constructor(props){
    super(props);
    this.getallacceptedjobpost();
  }
  state={
    token:""
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
            this.data=res.jobs;
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
        <Container>
          <Header />
          <Content>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                  {data.name}
                  </Text>
                  
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
  }

  render() {
    const { navigation } = this.props;
    return (
      <CompleteFlatList
      searchKey={['name', 'status', 'time', 'date']}
      highlightColor="yellow"
      pullToRefreshCallback={() => {
       // alert('refreshing');
      }}
      data={data}
      renderSeparator={null}
      renderItem={this.cell}
    />
    );
  }
}
