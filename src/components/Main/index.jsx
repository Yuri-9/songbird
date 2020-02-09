/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';
import SectionSecretBird from '../SectionSecretBird/index';

class Main extends Component {
  render() {
    return (
      <div>
        <SectionSecretBird className="section_secret" />
      </div>
    );
  }
}

export default Main;
