/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';
import Player from '../AudioPlayer/index';
import ImageBird from '../ImageBird/index';

class SectionDescriptionBird extends Component {
  render() {
    const { kindsBirds, isActive } = this.props;
    return (
      <div className="description_bird">
        <div className="description_bird--flex">
          <ImageBird />
          <div className="container_player">
            <h3>******</h3>
            <Player />
          </div>
        </div>
        <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis cupiditate dicta fugiat velit error voluptas libero a distinctio itaque expedita sint porro quibusdam, deserunt, quaerat repellat veritatis tenetur necessitatibus impedit.</span>
      </div>
    );
  }
}

export default SectionDescriptionBird;
