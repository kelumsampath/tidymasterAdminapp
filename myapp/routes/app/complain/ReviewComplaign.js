import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './unchecked';
import Tab2 from './checkedcomplain';
export default class ReviewCompain extends Component {
  render() {
    return (
      <Container>
       
        <Tabs>
          <Tab heading="UnChecked Complaign">
            <Tab1 />
          </Tab>
          <Tab heading="Checked Complaign">
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}