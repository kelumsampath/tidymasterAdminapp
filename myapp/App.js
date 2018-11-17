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

import Screen2 from './screen/sc2';
import Screen1 from './screen/sc1';
import Screen3 from './screen/sc3';
import Login from './routes/login/Login';
import SideBar from './routes/app/SideBar/SideBar';
import Logout from './routes/app/Logout/index';
import CreateNewAdmin from './routes/app/addNewUser/createNewAdmin';
import CreateNewAdvertiser from './routes/app/addNewUser/createNewAdvertiser';
import CreateNewSuperAdmin from './routes/app/addNewUser/createNewSuperAdmin';

export default class App extends Component{
  render() {
    return (
      <Router>

        <Scene key="root">
         
              
          <Scene
          key='login'
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
              key='screen3'
              component={Screen3}
              title='Screen3'
              />

              <Scene
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
              />

              <Scene
              key='logout'
              component={Logout}
              title='Logout'
              />

          </Scene>

        </Scene>

      </Router>
    );
  }
}

