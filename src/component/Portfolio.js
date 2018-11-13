import React from 'react';
import { Col } from 'antd';

import OverlayGrid from './OverlayGrid';

import FlexRow from './FlexRow';
import './Portfolio.less';

const Portfolio = () => {
  return (
    <div id="portfolio" className="Portfolio">
      <h2 className="text-center subtitle">~&#9733;Portfolio&#9733;~</h2>
      <FlexRow align="center" justify="middle" className="padding-2">
        <Col xs={24} sm={12} md={8}>
          <OverlayGrid imageUrl="images/portfolio/crossy-road.png"
                       title="Game: VR Crossy Road"
                       description="A VR crossy road game."
                       link="games/crossy-road/index.html" />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <OverlayGrid imageUrl="images/portfolio/comics-screenshot.jpg"
                       title="Comic: What if I am a twin"
                       description="A self made comic with Bitmoji."
                       link="images/portfolio/comics.pdf" />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <OverlayGrid imageUrl="images/portfolio/kirby.png"
                       title="Game: Kirby vs. Missile"
                       description="A mini kirby game. Try to reach as many stars as your can while dodging the middles."
                       link="games/kirby/index.html" />
        </Col>
      </FlexRow>
    </div>
  );
};

export default Portfolio;
