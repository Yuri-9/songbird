/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';
import PlayButton from '../AudioButton';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { isMusicPlaying: false };
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
      <div>
        <PlayButton
          onClick={this.handleClick}
          isMusicPlaying={isMusicPlaying}
        />
        <audio id="audio" src={birdDate.audio} preload="true" ref={(audioTag) => { this.audio = audioTag; }}>
          <track kind="captions" srcLang="en" />
        </audio>
      </div>
    );
  }
}
export default Player;

// class Player extends Component {
//   constructor(props) {
//     super(props);
//     this.f = 1;
//   }


//   render() {
//     const { birdDate } = this.props;

//     return (
//       <>
//         <audio id="music" src={birdDate.audio} preload="true">
//           <track kind="captions" srcLang="en" />
//         </audio>
//         <div id="audioplayer" onClick={() => console.log('hello')}>
//           <div id="pButton" className="play" />
//           <div id="timeline">
//             <div id="playhead" />
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Player;
