/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';

class ImageBird extends Component {
  render() {
    return (
      <div className="container_image">
        <img src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg" alt="bird" />
      </div>
    );
  }
}

export default ImageBird;
