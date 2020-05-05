/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';


function PlayButton(props) {
  const { isMusicPlaying, onClick } = props;
  const className = isMusicPlaying ? 'play active' : 'play';
  return (
    <button label="Play" onClick={onClick} href="#" title="Play" className={className} type="button" />
  );
}

export default PlayButton;
