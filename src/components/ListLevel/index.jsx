/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import KindBird from '../KindBirds/index';
import kindsBirds from '../../data/kindsBird';

function ListLevel(props) {
  const { level } = props;
  const kindsList = kindsBirds.map((item, index) => (
    <KindBird
      key={item.id}
      name={item.text}
      isActive={level === index}
    />
  ));
  return (
    <ul className="navbar">
      {kindsList}
    </ul>
  );
}


export default ListLevel;
