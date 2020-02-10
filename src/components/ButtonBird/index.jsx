/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';

class ButtonBird extends Component {
  render() {
    const { birdDate, isCurrentAnswer } = this.props;
    const className = isCurrentAnswer ? 'navbar--item active' : 'navbar--item ';
    return (
      <li className="button_bird--item">
        <div className="button_bird--color color" />
        {birdDate.name}
      </li>
    );
  }
}

export default ButtonBird;
