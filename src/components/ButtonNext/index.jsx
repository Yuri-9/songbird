/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';

class ButtonNext extends Component {
  render() {
    // const { birdDate, isCurrentAnswer } = this.props;
    // const className = isCurrentAnswer ? 'navbar--item active' : 'navbar--item ';
    return (
      <button type="button" className="button_next">Next Level</button>
    );
  }
}

export default ButtonNext;
