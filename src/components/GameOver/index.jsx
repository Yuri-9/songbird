/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function GameOver({ totalScore, onClick, showStore }) {
  return (
    <div className="container_game_over" style={{ display: !showStore ? 'block' : 'none' }}>
      <h1 className="container_game_over--item"> Поздравляем! </h1>
      <p className="container_game_over--item">
        {`Вы прошли викторину и набрали ${totalScore} из 30 возможных баллов`}
      </p>
      <button type="button" onClick={onClick} className="container_game_over--button">Попробуйте еще раз! </button>
    </div>
  );
}

export default GameOver;
