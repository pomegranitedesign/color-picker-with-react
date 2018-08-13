import React, { Component, Fragment } from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

import Card from '../Card/Card';
import { Container } from '../../Components/Container/Container';
import Header from '../../Components/Header/Header';
import './App.css'

const PickerContainer = styled.div`
  position: absolute;

  left: 10vw;

  z-index: 2;
`;

export default class App extends Component {
  state = {
    currentColor: "#000000",
    pickerToggled: false
  }

  togglePicker = _ => {
    this.setState(({pickerToggled}) => ({pickerToggled: !pickerToggled}));
  }

  render() {
    const { currentColor, pickerToggled } = this.state;

    return (
      <div>
        <Container>
          <Header />

          <PickerContainer>
            {pickerToggled ? 
              <SketchPicker 
                disableAlpha={true}
                color={currentColor}
                onChange={(color) => {
                  this.setState(_ => ({currentColor: color.hex}));
                }} 
              /> 
              : 
              null
            }
          </PickerContainer>

          <Card 
            currentColor={currentColor}
            togglePicker={this.togglePicker}
          />

        </Container>
      </div>
    );
  }
}
