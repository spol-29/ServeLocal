import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { PAGE_IDS } from '../utilities/PageIDs';

/** Render the About Us page */
const AboutUs = () => (
  <Container fluid id={PAGE_IDS.ABOUT_US}>
    <Container fluid textAlign='center' className='organization-sign-up-top'>
      <Header as='h1' textAlign='center' inverted>
        About ServeLocal
      </Header>
    </Container>
    <Container className='about-us-content'>
      <Header as='h2' textAlign='left'>
        Making Local Impact Simple
      </Header>
      <p>
        {/* eslint-disable-next-line max-len */}
        ServeLocal is a platform designed to connect student volunteers with organizations in need of service. Our mission is to make it easy for students to discover and engage with meaningful volunteer opportunities. Through our platform, you can explore and sign up for various opportunities - from one-time events to ongoing commitments.
      </p>
      <Header as='h2' textAlign='left'>
        Why ServeLocal?
      </Header>
      <p>
        The nonprofit sector is facing unprecedented challenges. Recent studies show a 23% drop in formal volunteering, causing many organizations to reduce or completely end vital community services due to workforce shortages. ServeLocal aims to bridge this gap by making it easier than ever for students to find and engage with local volunteer opportunities.
      </p>
      <br/>
      <p>
        Together, we can strengthen our communities through service.
      </p>
      <Header as='h2' textAlign='left'>
        Created By
      </Header>
      <p>
        ServeLocal was developed as part of the Congressional App Challenge, with the goal of addressing the critical volunteer shortage affecting nonprofit organizations. By connecting students with meaningful service opportunities, we aim to create lasting positive impact in our communities.
      </p>
      <p>
        <b>Developer:</b> Sriram Polineni
      </p>
    </Container>
  </Container>
);

export default AboutUs;
