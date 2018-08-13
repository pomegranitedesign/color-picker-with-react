import React, { Component } from 'react';

import CardColor from '../../Components/CardColor/CardColor';
import CardValue from '../../Components/CardValue/CardValue';
import Toggle from '../Toggle/Toggle';
import './Card.css';

export default class Card extends Component {
  state = {
    copied: false
  }
  
  render() {
    const { copied } = this.state;
    const { currentColor, togglePicker } = this.props;

    return (
      <div className="Card">
        <CardColor 
          currentColor={currentColor}
          togglePicker={togglePicker}
        />

        <CardValue 
          currentColor={currentColor}
        />
      </div>
    );
  }
}
