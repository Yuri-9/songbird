/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function Score({ score }) {
  return (
    <h5 className="header_score">
      Score:
      {' '}
      {score}
    </h5>
  );
}

export default Score;
