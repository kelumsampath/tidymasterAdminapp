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
          key='login'
          hideNavBar
          component={Login}
          title='Login'
          initial
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
              title='Screen1'
              />

              <Scene
              key='screen2'
              component={Screen2}
              title='Screen2'
              />

              <Scene
              key='searchuser'
              component={SearchUser}
              title='searchuser'
              />

              {/* <Scene
              key='CreateNewSuperAdmin'
              component={CreateNewSuperAdmin}
              title='CreateNewSuperAdmin'
              />

              <Scene
              key='CreateNewAdmin'
              component={CreateNewAdmin}
              title='CreateNewAdmin'
              />

              <Scene
              key='CreateNewAdvertiser'
              component={CreateNewAdvertiser}
              title='CreateNewAdvertiser'
              /> */}

              <Scene
                key="createuser"
                tabs
                tabBarStyle={{backgroundColor:'#1E90FF'}}
                tabBarPosition={'top'}
              >
                <Scene key="createadmin" title="createadmin" icon={TabIcon}>
                  <Scene key="createadmin" component={CreateNewAdmin} title="createadmin" initial></Scene>
                </Scene>

                <Scene key="createsuperadmin"  title="createsuperadmin" icon={TabIcon}>
                  <Scene key="createsuperadmin" component={CreateNewSuperAdmin} title="createsuperadmin"></Scene>
                </Scene>
                
                <Scene key="createadvertiser"  title="createadvertiser" icon={TabIcon}>
                  <Scene key="createadvertiser" component={CreateNewAdvertiser} title="createadvertiser"></Scene>
                </Scene>
              
              </Scene>

              <Scene key="warnuser" component={warnuser} title="warn"></Scene>
              <Scene key="deleteuser" component={deleteuser} title="delete"></Scene>

              <Scene
                key="tabbar"
                tabs
                tabBarStyle={{backgroundColor:'#1E90FF'}}
                tabBarPosition={'top'}
              >
                <Scene key="pendingjobs" title="Pending" icon={TabIcon}>
                  <Scene key="pending" component={PendingJobs} title="pending" initial></Scene>
                </Scene>

                <Scene key="acceptedjobs"  title="Accepted" icon={TabIcon}>
                  <Scene key="accepted" component={AcceptedJobs} title="accepted"></Scene>
                </Scene>
                
                <Scene key="rejectedjobs"  title="Rejected" icon={TabIcon}>
                  <Scene key="rejected" component={RejectedJobs} title="rejected"></Scene>
                </Scene>
              
              </Scene>

              
              <Scene key="Accept" component={Accept} title="Accept"></Scene>
              <Scene key="Reject" component={Reject} title="Reject"></Scene>
              <Scene key="Pending" component={Pending} title="Pending"></Scene>
              

              <Scene
              key='logout'
              component={Logout}
              title='Logout'
              />

              <Scene
                key="reviewcomplain"
                tabs
                tabBarStyle={{backgroundColor:'#1E90FF'}}
                tabBarPosition={'top'}
              >
                <Scene key="uncheckedcomplain" title="uncheckedcomplain" icon={TabIcon}>
                  <Scene key="uncheckedcomplain" component={Uncheckedcomplains} title="uncheckedcomplain" initial></Scene>
                </Scene>

                <Scene key="checkedcomplain" title="checkedcomplain" icon={TabIcon}>
                  <Scene key="checkedcomplain" component={checkedcomplains} title="checkedcomplain" ></Scene>
                </Scene>
              
              </Scene>

              <Scene key="warncomplaineduser" component={warncomplaineduser} title="warncomplaineduser"></Scene>
              <Scene key="deletecomplaineduser" component={deletecomplaineduser} title="deletecomplaineduser"></Scene>

          </Scene>

        </Scene>

      </Router>
    );
  }
}

