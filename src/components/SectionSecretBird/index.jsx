/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';
import Player from '../AudioPlayer/index';
import ImageBird from '../ImageBird/index';


class SectionSecretBird extends Component {
  render() {
    return (
      <div className="section_secret">
        <ImageBird />
        <div className="container_player">
          <h3>******</h3>
          <Player />
        </div>
      </div>
    );
  }
}

export default SectionSecretBird;
