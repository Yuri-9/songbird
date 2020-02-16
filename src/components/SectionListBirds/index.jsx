/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import ButtonBird from '../ButtonBird/index';
import birdsDate from '../../data/dateBirds';

function SectionListBirds({ handleClick, level, isCorrectAnswerGet }) {
  const birdsDateLevel = birdsDate[level];

  const buttonBirdList = birdsDateLevel.map((item) => (
    <ButtonBird
      key={item.id}
      handleClick={handleClick}
      isCorrectAnswerGet={isCorrectAnswerGet}
      birdName={item.name}
      id={item.id}
    />
  ));

  return (
    <ul className="list_bird">
      {buttonBirdList}
    </ul>
  );
}

export default SectionListBirds;
