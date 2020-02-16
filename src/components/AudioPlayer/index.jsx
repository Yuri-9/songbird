/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PlayButton from '../AudioButton';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMusicPlaying: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isMusicPlaying } = this.state;
    if (isMusicPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState((prevState) => ({
      isMusicPlaying: !prevState.isMusicPlaying,
    }));
  }

  render() {
    const { birdDate } = this.props;
    const { isMusicPlaying } = this.state;
    return (
      <>
        <PlayButton
          onClick={this.handleClick}
          isMusicPlaying={isMusicPlaying}
        />
        <audio id="audio" src={birdDate.audio} preload="true" ref={(audioTag) => { this.audio = audioTag; }}>
          <track kind="captions" srcLang="en" />
        </audio>
      </>
    );
  }
}
export default Player;
