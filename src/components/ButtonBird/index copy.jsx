/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';

class ButtonBird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'button_bird--color',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // shouldComponentUpdate() {
  //   const { state, update } = this.props;
  //   const { clickButtonNextLevel } = state;
  //   if (clickButtonNextLevel) {
  //     this.setState({ className: 'button_bird--color' });
  //     update({
  //       clickButtonNextLevel: false,
  //     });
  //   }
  //   return true;
  // }

  handleClick() {
    console.log('handleClick');
    const { className } = this.state;
    const { birdDate, state, update } = this.props;
    const { numberSecretBird, isCorrectAnswerGet, scope, clickButtonNextLevel } = state;

    const isGetAnswer = (birdDate.id - 1) === numberSecretBird;

    update({
      numberSelectBird: (birdDate.id - 1),
      isCorrectAnswer: isGetAnswer,
    });

    if (className === 'button_bird--color' && !isGetAnswer && !isCorrectAnswerGet) {
      update((prevScope) => ({
        scope: prevScope.scope - 1,
      }));
    }

    if (isGetAnswer && !isCorrectAnswerGet) {
      update((prevCurrentScope) => ({
        currentScope: prevCurrentScope.currentScope + scope,
        isCorrectAnswerGet: true,
      }));
    }


    if (!isCorrectAnswerGet) {
      const classNameCurrent = (isGetAnswer) ? 'button_bird--color color_green' : 'button_bird--color color_red';
      this.setState({ className: classNameCurrent });
    }
    if (clickButtonNextLevel) {
      update({
        clickButtonNextLevel: false,
      });
      this.setState({ className: 'button_bird--color' });
    }
  }

  render() {
    const { birdDate, state: { clickButtonNextLevel, isCorrectAnswerGet } } = this.props;
    const { className } = this.state;
    console.log('clickButtonNextLevel 111', clickButtonNextLevel);

    return (
      <li className="button_bird--item" onClick={this.handleClick}>
        <div className={clickButtonNextLevel ? 'button_bird--color' : className} />
        {birdDate.name}
      </li>
    );
  }
}


export default ButtonBird;
