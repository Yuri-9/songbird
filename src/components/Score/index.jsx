/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';

function Score({ totalScore }) {
  return (
    <h5>
      {`Score: ${totalScore}`}
    </h5>
  );
}

export default Score;
