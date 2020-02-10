/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';
import ButtonBird from '../ButtonBird/index';

class SectionListBirds extends Component {
  render() {
    const { birdsDate } = this.props;
    console.log('---', birdsDate[0][0].id);
    const buttonBirdList = birdsDate.map((item, index) => <ButtonBird key={item[index].id} birdDate={item[index]} />);
    return (
      <ul className="list_bird">
        {buttonBirdList}
      </ul>
    );
  }
}

export default SectionListBirds;
