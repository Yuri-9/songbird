import React, { Component } from 'react';
import './app.scss';

import birdsDate from '../data/dateBirds';
import getRandomNumber from '../utils/getRandomNumber';


import KindBirdList from './KindBirdList/index';
import SectionSecretBird from './SectionSecretBird/index';
import SectionListBirds from './SectionListBirds/index';
import SectionDescriptionBird from './SectionDescriptionBird/index';
import ButtonNext from './ButtonNextLevel/index';
import Score from './Score/index';

console.log(birdsDate);

class App extends Component {
  constructor(props) {
    super(props);
    // Устанавливаем состояние
    this.state = {
      level: 0,
      numberSecretBird: getRandomNumber(6),
      numberSelectBird: 0,
      isCorrectAnswer: true,
      data: null,
      active: 0,
      term: '',
    };
    this.updateData = this.updateData.bind(this);
  }

  updateData(config) {
    this.setState(config);
    const { level } = this.state;
    console.log('level', level);
  }

  consoleLog() {
    const { numberBird, level } = this.state;
    console.log('active', numberBird);
    console.log('level', level);
  }

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <div className="logo" />
          <h1>Song Bird</h1>
          <Score score={15} />
        </header>
        <KindBirdList state={this.state} />
        <main className="main">
          <SectionSecretBird state={this.state} />
          <SectionListBirds state={this.state} update={this.updateData} />
          <SectionDescriptionBird state={this.state} />
          <ButtonNext state={this.state} update={this.updateData} />
        </main>
        <button type="button" onClick={() => this.consoleLog()} label="dsf" wight="100px" height="100px" />
      </div>
    );
  }
}

export default App;
