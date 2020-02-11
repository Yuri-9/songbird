/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function ImageBird({ birdDate }) {
  return (
    <div className="container_image">
      <img src={birdDate.image} alt="bird" />
    </div>
  );
}


export default ImageBird;
