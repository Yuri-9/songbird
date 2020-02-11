/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

const Player = ({ birdDate }) => (
  <audio src={birdDate.audio} controls>
    <track kind="captions" srcLang="en" />
  </audio>
);


export default Player;
