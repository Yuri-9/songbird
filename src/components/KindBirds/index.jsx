/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function KindBird(props) {
  const { name, isActive } = props;
  const className = isActive ? 'navbar--item active' : 'navbar--item ';
  return (
    <li className={className}>{name}</li>
  );
}


export default KindBird;
