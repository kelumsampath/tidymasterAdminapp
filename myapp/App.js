/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router,Scene, Actions} from 'react-native-router-flux';
import { Icon } from 'native-base';

import Screen2 from './screen/sc2';
import Screen1 from './screen/sc1';
import Screen3 from './screen/sc3';
import Login from './routes/login/Login';
import SideBar from './routes/app/SideBar/SideBar';
import Logout from './routes/app/Logout/index';
import CreateNewAdmin from './routes/app/addNewUser/createNewAdmin';
import CreateNewAdvertiser from './routes/app/addNewUser/createNewAdvertiser';
import CreateNewSuperAdmin from './routes/app/addNewUser/createNewSuperAdmin';
import PendingJobs from './routes/app/jobreview/PendingJobs';
import AcceptedJobs from './routes/app/jobreview/AcceptedJobs';
import RejectedJobs from './routes/app/jobreview/RejectedJobs';
import Accept from './routes/app/jobreview/accept';
import Reject from './routes/app/jobreview/reject';
import Pending from './routes/app/jobreview/pending';
import SearchUser from './routes/app/searchuser/searchuser';
import deleteuser from './routes/app/searchuser/deleteuser';
import warnuser from './routes/app/searchuser/warnuser';
import Uncheckedcomplains from './routes/app/complain/unchecked';
import warncomplaineduser from './routes/app/complain/warnuser';
import deletecomplaineduser from './routes/app/complain/deleteuser';
import checkedcomplains from './routes/app/complain/checkedcomplain';
import CreateNewUser from './routes/app/addNewUser/CreateNewUser';
import JobReview from './routes/app/jobreview/JobReview';
import ReviewComplaigns from './routes/app/complain/ReviewComplaign';
import Profile from './routes/app/Profile';
import Reviewjobsuccess from './routes/tempory/Reviewjobsucccess';
import Complainsuccess from './routes/tempory/complainsuccess';
import Regusersuccess from './routes/tempory/Regsuccess';
import Jobpostview from './routes/tempory/Jobpostview';
import Complainview from './routes/tempory/complainview';
import Actioncomplainview from './routes/tempory/actioncompainview';
import Userprofile from './routes/tempory/userprofile';
import Adminprofile from './routes/tempory/adminprofile';
import Welcome from './routes/login/welcome';
import fogetpassword from './routes/tempory/fogetpass';

const TabIcon=({ selected , title})=>{
  return(
    <Text style={{color:selected? '#F0F8FF':'#000000'}}>{title}</Text>
  )
}

const MenuIcon = () => {
  return (
    <Icon name='menu' size={30}/>
  )
}

export default class App extends Component{
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#00BFFF' }}>

        <Scene key="root">
         
        <Scene
          key='Welcome'
          hideNavBar
          component={Welcome}
          title='Welcome'
          initial
          />
              
          <Scene
          key='login'
          hideNavBar
          component={Login}
          title='Login'
          />

          <Scene
          key='fogetpassword'
          hideNavBar
          component={fogetpassword}
          title='Foget password'
          />

          <Scene
            key="drawer"
            drawer
            contentComponent={SideBar}
            drawerWidth={300}
            hideNavBar
            drawerIcon={MenuIcon}
          >
              <Scene
              key='screen1'
              component={Screen1}
              title='Weekly User Views'
              />

              <Scene
              key='screen2'
              component={Screen2}
              title='Monthly User Views'
              />

              <Scene
              key='searchuser'
              component={SearchUser}
              title='Search User'
              />


              <Scene
              key='CreateNewUser'
              component={CreateNewUser}
              title='Create New User'
              />

              <Scene
              key='Profile'
              component={Profile}
              title='Profile'
              />

              <Scene
              key='JobReview'
              component={JobReview}
              title='Job Post Review'
              />

              <Scene
              key='ReviewComplaigns'
              component={ReviewComplaigns}
              title='Complain Review'
              />
              
              <Scene
              key='logout'
              component={Logout}
              title='Logout'
              />

              <Scene key="Reviewjobsuccess" component={Reviewjobsuccess} title="Review" hideNavBar></Scene>
              <Scene key="Complainsuccess" component={Complainsuccess} title="Review" hideNavBar></Scene>
              <Scene key="Regusersuccess" component={Regusersuccess} title="Review" hideNavBar></Scene>
              
          </Scene>

          <Scene key="warncomplaineduser" component={warncomplaineduser} title="Warn Complained User"></Scene>
          <Scene key="deletecomplaineduser" component={deletecomplaineduser} title="Remove Complained User"></Scene>

          <Scene key="Accept" component={Accept} title="Accept"></Scene>
          <Scene key="Reject" component={Reject} title="Reject"></Scene>
          <Scene key="Pending" component={Pending} title="Pending"></Scene>

          <Scene key="warnuser" component={warnuser} title="warn"></Scene>
          <Scene key="deleteuser" component={deleteuser} title="delete"></Scene>

          <Scene key="Jobpostview" component={Jobpostview} title="Job Post Details"></Scene>
          <Scene key="Complainview" component={Complainview} title="Complain View"></Scene>
          <Scene key="Actioncomplainview" component={Actioncomplainview} title="Reviewed Complain View"></Scene>
          <Scene key="Userprofile" component={Userprofile} title="User Profile"></Scene>
          <Scene key="Adminprofile" component={Adminprofile} title="User Profile"></Scene>
        </Scene>

      </Router>
    );
  }
}

