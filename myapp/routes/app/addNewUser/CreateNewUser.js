import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './createNewAdmin';
import Tab2 from './createNewSuperAdmin';
import Tab3 from './createNewAdvertiser';
export default class CreateNewUser extends Component {
  render() {
    return (
      <Container>
       
        <Tabs>
          <Tab heading="Create New Admin">
            <Tab1 />
          </Tab>
          <Tab heading="Create New Super Admin">
            <Tab2 />
          </Tab>
          <Tab heading="Create New Advertisor">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}