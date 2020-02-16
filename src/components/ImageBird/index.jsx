/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function ImageBird({ imageBird }) {
  return (
    <div style={{ backgroundImage: `url(${imageBird})` }} className="container_image" />
  );
}


export default ImageBird;
