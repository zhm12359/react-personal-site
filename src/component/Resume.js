/* eslint-disable react/no-array-index-key */

import React from 'react';
import { Timeline, Row, Col, Tabs } from 'antd';
import './Resume.less';

import { workExperience, additionalExperience } from '../data/resumeData';

const { TabPane } = Tabs;

const mapExperienceToTimelineItem = experience => (
  experience.map((x, xi) => (
    <Timeline.Item key={xi}>
      <h3>{x.time}</h3>
      <h3>{x.position}, {x.location}</h3>
      <h4>
        <a href={x.companyUrl}>{x.company}</a>
      </h4>
      <ul>
        {x.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </Timeline.Item>
  ))
);

const Resume = () => (
  <div className="Resume" id="resume">
    <Row className="padding-top-4">
      <Col xs={24}>
        <Tabs
          defaultActiveKey="1"
          tabPosition="left">
          <TabPane tab="Work Experience" key="1" className="auto-overflow">
            <Timeline>
              {mapExperienceToTimelineItem(workExperience)}
            </Timeline>
          </TabPane>
          <TabPane tab="Additional Experience" key="2" className="auto-overflow">
            <Timeline>
              {mapExperienceToTimelineItem(additionalExperience)}
            </Timeline>
          </TabPane>
          <TabPane tab="Technical Skils" key="3" className="auto-overflow">
            <Timeline>
              <Timeline.Item>
                <h4>GPA 3.86/4.00</h4>
                <div>
                  <h4>Languages</h4>
                  <ul>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Scala</li>
                    <li>Kotlin</li>
                    <li>HTML and CSS</li>
                  </ul>
                </div>
                <div>
                  <h4>Web Frameworks</h4>
                  <ul>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>Java Spring</li>
                    <li>.NET</li>
                    <li>Express</li>
                    <li>ReactJs</li>
                  </ul>
                </div>
                <div>
                  <h4>Database</h4>
                  <ul>
                    <li>SQL Server</li>
                    <li>Postgres SQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h4>Infrastructure</h4>
                  <ul>
                    <li>Git</li>
                    <li>Subversion</li>
                    <li>Amazon Web Services</li>
                  </ul>
                </div>
              </Timeline.Item>
            </Timeline>
          </TabPane>
          <TabPane tab="Education" key="4" className="auto-overflow">
            <Timeline>
              <Timeline.Item>
                <h3>September 2014 - December 2017</h3>
                <h3>New York University, Bachelor of Arts in Computer Science </h3>
                <h4>GPA 3.86/4.00</h4>
                <div>
                  <h4>Relevant Coursework</h4>
                  <ul>
                    <li>Full Stack Web Development</li>
                    <li>Data Structures</li>
                    <li>Algorithms</li>
                    <li>Statistics</li>
                    <li>Operating System</li>
                    <li>Object Oriented Programming</li>
                  </ul>
                </div>
              </Timeline.Item>
            </Timeline>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
);

export default Resume;
