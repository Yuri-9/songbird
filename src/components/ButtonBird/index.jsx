/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';

class ButtonBird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classNameDiv: 'button_bird--color',
    };
  }
  onClick = () => {
    const {
      birdDate, state, update
    } = this.props;
    const { classNameDiv } = this.state;
    const { numberSecretBird, isCorrectAnswerGet, isCorrectAnswer } = state;
    const isGetAnswer = (birdDate.id - 1) === numberSecretBird;

    update({
      numberSelectBird: (birdDate.id - 1),
      isCorrectAnswer: isGetAnswer,
    });

    if (isGetAnswer) {
      update({
        isCorrectAnswerGet: true,
      });
    }

    if (!isCorrectAnswerGet) {
      this.setState({
        classNameDiv: (numberSecretBird === birdDate.id - 1) ? `${classNameDiv} color_green` : `${classNameDiv} color_red`,
      });
    }
  }

  colorButton = () => {
      
  }


  render() {  
    const { birdDate, state: {clickButtonNextLevel} } = this.props;
    return (
      <li className="button_bird--item" onClick={this.onClick}>
        <div className={ clickButtonNextLevel ? 'button_bird--color' : this.state.classNameDiv} />
        {birdDate.name}
      </li>
    );
  }
}

export default ButtonBird;
