/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';
import ButtonBird from '../ButtonBird/index';
import birdsDate from '../../data/dateBirds';

class SectionListBirds extends Component {  
    

  render() {
    const { state, update } = this.props;
    const { level } = state;
    const birdsDateLevel = birdsDate[level];
    const buttonBirdList = birdsDateLevel.map((item) => <ButtonBird key={item.id} state={state} birdDate={item} update={update} />);
    return (
      <ul className="list_bird">
        {buttonBirdList}
      </ul>
    );
  }
}


export default SectionListBirds;
