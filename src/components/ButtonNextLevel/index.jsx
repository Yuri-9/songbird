/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function ButtonNextLevel(props) {
  const { isCorrectAnswerGet, handleClick } = props;

  return (
    <button type="button" onClick={handleClick} className={isCorrectAnswerGet ? 'button_next green' : 'button_next'}>Next Level</button>
  );
}

export default ButtonNextLevel;
