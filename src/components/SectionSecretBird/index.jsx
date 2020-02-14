/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import Player from '../AudioPlayer/index';
import ImageBird from '../ImageBird/index';
import birdsDate from '../../data/dateBirds';


function SectionSecretBird(props) {
  const { state: { level, numberSecretBird } } = props;
  // console.log(level, numberSecretBird);
  const selectBirdDate = birdsDate[level][numberSecretBird];
  return (
    <div className="section_secret">
      <ImageBird birdDate={selectBirdDate} />
      <div className="container_player">
        <h3>******</h3>
        <Player birdDate={selectBirdDate} />
      </div>
    </div>
  );
}


export default SectionSecretBird;
