/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import Player from '../AudioPlayer/index';
import ImageBird from '../ImageBird/index';
import birdsDate from '../../data/dateBirds';

function SectionDescriptionBird(props) {
  const { level, numberSelectBird } = props;
  const dateBirdSelect = birdsDate[level][numberSelectBird - 1];

  return numberSelectBird ? (
    <div className="description_bird">
      <div className="description_bird--flex">
        <ImageBird imageBird={dateBirdSelect.image} />
        <ul className="container_player">
          <li>
            <h3>{dateBirdSelect.name}</h3>
          </li>
          <li>
            <span>{dateBirdSelect.species}</span>
          </li>
          <Player birdDate={dateBirdSelect} />
        </ul>
      </div>
      <span>{ dateBirdSelect.description }</span>
    </div>
  ) : (
    <div className="description_bird">
      <span>Послушайте плеер.</span>
      <span>Угадайте птицу, выбрав одну из списка </span>
    </div>
  );
}


export default SectionDescriptionBird;
