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
import { Router,Scene} from 'react-native-router-flux';

import Screen2 from './screen/sc2';
import Screen1 from './screen/sc1';
import Screen3 from './screen/sc3';

export default class App extends Component{
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
          key='screen1'
          component={Screen1}
          title='Screen1'
          initial
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
              
        </Scene>
      </Router>
    );
  }
}

