/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';


function ButtonBird({ id, birdName, handleClick }) {
  return (
    <li
      className="button_bird--item"
      onClick={(e) => {
        handleClick(e, id);
      }}
    >
      <div className="button_bird--color" />
      {birdName}
    </li>
  );
}

export default ButtonBird;
