/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function ButtonNext(props) {
  const { state, update } = props;
  const { level, isCorrectAnswer } = state;
  let levelNext = level;
  if (isCorrectAnswer) {
    levelNext = (level + 1) % 6;
  }

  return (
    <button type="button" className="button_next" onClick={() => update({ level: levelNext })}>Next Level</button>
  );
}


export default ButtonNext;
