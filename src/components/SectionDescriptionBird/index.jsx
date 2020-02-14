/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import Player from '../AudioPlayer/index';
import ImageBird from '../ImageBird/index';
import birdsDate from '../../data/dateBirds';

function SectionDescriptionBird(props) {
  const { state: { level, numberSelectBird } } = props;
  // console.log(level, numberSelectBird);
  const selectBirdDate = birdsDate[level][numberSelectBird];
  return (
    <div className="description_bird">
      <div className="description_bird--flex">
        <ImageBird birdDate={selectBirdDate} />
        <div className="container_player">
          <h3>******</h3>
          <Player birdDate={selectBirdDate} />
        </div>
      </div>
      <span>{ selectBirdDate.description }</span>
    </div>
  );
}


export default SectionDescriptionBird;
