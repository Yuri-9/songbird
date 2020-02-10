/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import bird from '../../data/dateBirds';

console.log(bird);

const Player = () => (
  <AudioPlayer
    autoPlay
    src={bird[0][0].audio}
    hidePlayer={false}
    onPlay={() => console.log('onPlay')}
  />

);

export default Player;
