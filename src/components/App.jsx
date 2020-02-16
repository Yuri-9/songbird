import React, { Component } from 'react';
import './app.scss';
import audioFortune from '../data/music/fortune.mp3';
import audioFail from '../data/music/fail.mp3';

import { getRandomInt, clearColorButton } from '../utils/utils';

import ListLevel from './ListLevel/index';
import SectionSecretBird from './SectionSecretBird/index';
import SectionListBirds from './SectionListBirds/index';
import SectionDescriptionBird from './SectionDescriptionBird/index';
import ButtonNextLevel from './ButtonNextLevel/index';
import Score from './Score/index';
import GameOver from './GameOver/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      numberSecretBird: getRandomInt(6),
      numberSelectBird: false,
      isCorrectAnswerGet: false,
      score: 5,
      totalScore: 0,
      showStore: true,
    };
    this.clickButtonNextLevel = this.clickButtonNextLevel.bind(this);
    this.clickButtonBird = this.clickButtonBird.bind(this);
    this.restart = this.restart.bind(this);
  }

  clickButtonBird(e, ibBird) {
    const soundFortune = document.getElementById('audio_fortune');
    const soundFail = document.getElementById('audio_fail');
    const { target } = e;
    const { numberSecretBird, isCorrectAnswerGet, score } = this.state;
    this.setState({ numberSelectBird: ibBird });
    if (!isCorrectAnswerGet && ibBird - 1 !== numberSecretBird) {
      target.firstChild.style.background = 'red';
      this.setState((prevState) => ({ score: prevState.score - 1 }));
      soundFail.play();
    }

    if (!isCorrectAnswerGet && ibBird - 1 === numberSecretBird) {
      target.firstChild.style.background = 'green';
      this.setState((prevState) => ({
        totalScore: prevState.totalScore + score,
        isCorrectAnswerGet: true,
      }));
      soundFortune.play();
    }
  }

  clickButtonNextLevel() {
    const { isCorrectAnswerGet, level } = this.state;
    if (isCorrectAnswerGet && level < 5) {
      this.setState((prevState) => ({
        level: prevState.level + 1,
        isCorrectAnswerGet: false,
        numberSecretBird: getRandomInt(6),
        numberSelectBird: false,
        score: 5,
      }));
      clearColorButton();
    } else if (level === 5) {
      this.setState({ showStore: false });
    }
  }


  restart() {
    this.setState((prevState) => ({
      showStore: !prevState.showStore,
      level: 0,
      numberSecretBird: getRandomInt(6),
      numberSelectBird: false,
      isCorrectAnswerGet: false,
      score: 5,
      totalScore: 0,
    }));
    clearColorButton();
  }


  render() {
    const {
      isCorrectAnswerGet, totalScore, numberSecretBird, level, numberSelectBird, showStore,
    } = this.state;
    return (
      <div className="wrapper">
        <header className="header">
          <div className="logo" />
          <h1>Song Bird</h1>
          <Score totalScore={totalScore} />
        </header>
        <ListLevel level={level} />
        <GameOver showStore={showStore} totalScore={totalScore} onClick={this.restart} />
        <main className="main" style={{ display: showStore ? 'grid' : 'none' }}>
          <SectionSecretBird
            level={level}
            numberSecretBird={numberSecretBird}
            isCorrectAnswerGet={isCorrectAnswerGet}
          />
          <SectionListBirds
            isCorrectAnswerGet={isCorrectAnswerGet}
            level={level}
            handleClick={this.clickButtonBird}
          />
          <SectionDescriptionBird
            level={level}
            numberSelectBird={numberSelectBird}
          />
          <ButtonNextLevel
            isCorrectAnswerGet={isCorrectAnswerGet}
            handleClick={this.clickButtonNextLevel}
          />
        </main>
        <audio id="audio_fortune" src={audioFortune}>
          <track kind="captions" srcLang="en" />
        </audio>
        <audio id="audio_fail" src={audioFail}>
          <track kind="captions" srcLang="en" />
        </audio>
      </div>
    );
  }
}

export default App;
