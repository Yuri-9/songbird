/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.scss';

class ButtonBird extends Component {
  constructor(props) {
    super(props);
    // Устанавливаем состояние
    this.state = {
      classNameDiv: 'button_bird--color',
    }
  }

  render() {
   
    const { birdDate, state, isCorrectAnswer, update } = this.props;
    console.log('birdDate', birdDate, 'isCorrectAnswer', isCorrectAnswer, 'update', state);
    
    const { classNameDiv } = this.state;

    const onClick = () => {
      update({ numberSelectBird: (birdDate.id - 1) });
      this.setState({
        classNameDiv: isCorrectAnswer ? `${classNameDiv} color_red` : `${classNameDiv} color_green`,
      });
    };
    console.log(classNameDiv);
    return (
      <li className="button_bird--item" onClick={onClick}>
        <div className={classNameDiv} />
        {birdDate.name}
      </li>
    );
  }
}

export default ButtonBird;


// <li className="button_bird--item" onClick={onClick}>
//         <div className={className} />
//         {birdDate.name}
//       </li>
