
import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Text, List, ListItem, Thumbnail } from 'native-base';
import CompleteFlatList from 'react-native-complete-flatlist';
var config = require('./../../../screen/config');


export default class AcceptedJobs extends Component {
  constructor(props) {
    super(props);
    this.getallacceptedjobpost();
  }
  state = {
    token: "",
    data: []
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


  handletoken = (text) => {
    this.setState({ token: text })
  }

  getallacceptedjobpost() {
    //alert(this.state.token)
    fetch(config.config.hostname + '/admin/adminalljobs', {
      method: 'POST',
      headers: {
        "Authorization": this.state.token,
        'Content-Type': 'application/json',

      },

    })

      .then((response) => response.json())
      .then((res) => {

        if (res.state === true) {
          var jobpost = res.jobs;
          //console.warn(jobpost)
          this.setState({ data: jobpost });
        } else {
          alert(res.msg)
        }
      })
      .done();
  }

  getval(time) {
    var date_format = '12';
    var d = new Date(time);
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var result = hour;
    var ext = '';
    if (date_format == '12') {
      if (hour > 12) {
        ext = 'PM';
        hour = (hour - 12);
        if (hour < 10) {
          result = "0" + hour;
        } else if (hour == 12) {
          hour = "00";
          ext = 'AM';
        }
      }
      else if (hour < 12) {
        result = ((hour < 10) ? "0" + hour : hour);
        ext = 'AM';
      } else if (hour == 12) {
        ext = 'PM';
      }
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    result = result + ":" + minutes + ' ' + ext;
    return result
  }

  getdate(time) {
    var d = new Date(time),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  cell = (data, index) => {
    const item = data.cleanData ? data.cleanData : data

    //console.log(data.cleanData)
    //console.log('data.cleanData will be not null if search bar is not empty. caution, data without search is not same like data with search due to implement the highlight component. data.cleanData is equal to data')

    //console.log('this is index number : '+index)

    //console.log(item+' this is original data')
    return (
      <List>
        <ListItem style={styles.card}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => { }}>
              <Image style={styles.image} source={{ uri: "https://cdn-images-1.medium.com/max/1000/1*ZF5Pc5eg9KYQP-Cpo6IkyQ.png" }} />
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.name} rkType='primary3 mediumLine'>{data.title}</Text>
              <Text rkType='primary3 mediumLine'>Payment Status:{data.paymentstatus}</Text>
              <Text rkType='primary3 mediumLine'>Location:{data.joblocation}</Text>
              <View style={styles.contentHeader}>
                <Text style={styles.time}>
                {this.getdate(data.updatedDate)} {this.getval(data.updatedDate)}
                </Text>
              </View>
            </View>
          </View>
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

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    marginLeft: 0,
    height: 100,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 10
  },
  time: {

    fontSize: 11,
    color: "#808080"
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
})
