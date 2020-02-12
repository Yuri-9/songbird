/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function ButtonNext(props) {
  const { state, update } = props;
  const { level, isCorrectAnswerGet, clickButtonNextLevel } = state;
  let levelNext = level;
  if (isCorrectAnswerGet) {
    levelNext = (level + 1) % 6;
  }
  const updateState = () => {
    if (isCorrectAnswerGet && !clickButtonNextLevel) {
      update({ level: levelNext, clickButtonNextLevel: true });
    } else {
      update({
        isCorrectAnswer: false,
        isCorrectAnswerGet: false,
        clickButtonNextLevel: false,
      });
    }
  };

  return (
    <button type="button" className={isCorrectAnswerGet ? 'button_next green' : 'button_next'} onClick={updateState}>Next Level</button>
  );
}


export default ButtonNext;
