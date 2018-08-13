import React, { Component } from 'react';

export default class Toggle extends Component {
  state = {
    on: false
  }

  toggle = _ => {
    this.setState(({on}) => ({on: !on}));
  }
  
  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}
