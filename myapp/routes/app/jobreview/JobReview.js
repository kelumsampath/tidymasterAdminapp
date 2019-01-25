import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './PendingJobs';
import Tab2 from './AcceptedJobs';
import Tab3 from './RejectedJobs';
export default class JobReview extends Component {
  render() {
    return (
      <Container>
       
        <Tabs>
          <Tab heading="Pending">
            <Tab1 />
          </Tab>
          <Tab heading="Accepted">
            <Tab2 />
          </Tab>
          <Tab heading="Rejected">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}