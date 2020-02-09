/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';
import KindBird from '../KindBirds/index';
import kindsBirds from '../../data/kindsBird';

class KindsBirdsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberActiveItem: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { numberActiveItem } = this.state;
    this.setState({
      numberActiveItem: (numberActiveItem += 1) % 6,
    });
  }

  render() {
    const { numberActiveItem } = this.state;
    const kindsBirdList = kindsBirds.map((item, index) => <KindBird key={item.id} kindsBirds={item} isActive={numberActiveItem === index} />);
    return (
      <div>
        <ul className="navbar">
          {kindsBirdList}
        </ul>
        <button type="button" onClick={this.handleClick}>
          клик
        </button>
      </div>
    );
  }
}

export default KindsBirdsList;
