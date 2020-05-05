/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import Player from '../AudioPlayer/index';
import ImageBird from '../ImageBird/index';
import birdsDate from '../../data/dateBirds';
import image from '../../data/bird.jpg';


function SectionSecretBird(props) {
  const { level, numberSecretBird, isCorrectAnswerGet } = props;
  const dateBirdSelect = birdsDate[level][numberSecretBird];

  return (
    <div className="section_secret">
      <ImageBird imageBird={isCorrectAnswerGet ? dateBirdSelect.image : image} />
      <div className="container_player">
        <h3>{isCorrectAnswerGet ? dateBirdSelect.name : '******'}</h3>
        <Player birdDate={dateBirdSelect} />
      </div>
    </div>
  );
}


export default SectionSecretBird;
