/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';

class KindBird extends Component {
  render() {
    const { kindsBirds, isActive } = this.props;
    const className = isActive ? 'navbar--item active' : 'navbar--item ';
    return (
      <li className={className}>{kindsBirds.text}</li>
    );
  }
}

export default KindBird;
