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
