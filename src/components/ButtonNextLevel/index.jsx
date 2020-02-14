/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';

class ButtonNext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'button_next',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { state, update } = this.props;
    const { level, isCorrectAnswerGet } = state;
    const nextLevel = level + 1;
    if (isCorrectAnswerGet) {
      update({
        level: nextLevel,
        isCorrectAnswer: false,
        isCorrectAnswerGet: false,
        clickButtonNextLevel: true,
        scope: 6,
        className: 'button_bird--color',
      });
      this.setState({ className: 'button_next' });
    }
  }

  render() {
    const { state } = this.props;
    const { isCorrectAnswerGet } = state;
    const { className } = this.state;
    return (
      <button type="button" onClick={() => this.handleClick()} className={isCorrectAnswerGet ? 'button_next green' : className}>Next Level</button>
    );
  }
}

export default ButtonNext;
