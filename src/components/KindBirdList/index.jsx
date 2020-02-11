/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import KindBird from '../KindBirds/index';
import kindsBirds from '../../data/kindsBird';

function KindsBirdsList(props) {
  const { state: { level } } = props;
  const kindsBirdList = kindsBirds.map((item, index) => <KindBird key={item.id} kindsBirds={item} isActive={level === index} />);
  return (
    <div>
      <ul className="navbar">
        {kindsBirdList}
      </ul>
    </div>
  );
}


export default KindsBirdsList;
