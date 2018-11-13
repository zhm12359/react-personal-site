/* eslint-disable react/no-array-index-key */

import React from 'react';
import { Row, Col, Icon } from 'antd';

import './About.less';

const socialMediaInfo = [
  {
    icon: 'github',
    url: 'https://github.com/zhm12359'
  },
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/zenghanming'
  },
  {
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/hanming-zeng-75480a9b/'
  }
];

const About = () => (
  <div id="about" className="About">
    <Row justify="center" className="vertical-align-middle">
      <Col xs={24} sm={12} className="text-center">
        <img src="/images/profile-pic.jpg" className="profile-pic" alt="Profile Pic" />
      </Col>

      <Col xs={24} sm={12} className="text-center">
        <h2>About me</h2>
        <p>
          My name is Hanming Zeng. I am currently a Software Engineer at&nbsp;
          <a href="https://equityzen.com">Equityzen</a>. I graduated from
          New York University in December 2017 with a B.A. in Computer Science.
          I love coding and exploring newest technologies. This site is built with
          ReactJs and ant.design framework.
        </p>
        <div className="social-media">
          {
            socialMediaInfo.map(({ icon, url }, i) => (
              <a href={url}
                 key={i}
                 target="_blank"
                 rel="noopener noreferrer"><Icon type={icon} />
              </a>
            ))
          }
        </div>

      </Col>
    </Row>
  </div>
);

export default About;
