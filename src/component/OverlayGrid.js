import React from 'react';
import PropTypes from 'prop-types';

import './OverlayGrid.less';

const OverlayGrid = ({ imageUrl, title, link, description }) => (
  <div className="text-center">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="OverlayGrid">
        <img src={imageUrl}
             alt="Failed to load"
             className="image" />
        <div className="overlay">
          <div className="vertical-align-middle">
            <h2 className="white-text">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </a>
    <h3>{title}</h3>
  </div>
);

OverlayGrid.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default OverlayGrid;
