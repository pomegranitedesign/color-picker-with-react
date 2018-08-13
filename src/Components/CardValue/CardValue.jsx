import React, { Component, Fragment } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Transition } from 'react-spring';

import './CardValue.css';

export default class CardValue extends Component {
  state = {
    copied: false
  }

  render() {
    const { copied } = this.state;
    const { currentColor } = this.props;

    return (
      <Fragment>
        <CopyToClipboard 
          text={currentColor}
          onCopy={() => {
            this.setState(_ => ({copied: true}));
            setTimeout(_ => {
              this.setState(_ => ({copied: false}));
            }, 1500);
          }}
        >
          <h1 className="Card__Value">
            {currentColor}
          </h1>
        </CopyToClipboard>

        {copied ? (
          <Transition 
            from={{opacity: 0}}
            enter={{opacity: 1}}
            leave={{opacity: 0}}
          >
            {styles => (
              <h1 
                style={{
                  color: currentColor, 
                  position: 'relative', 
                  left: '25vw', 
                  top: '-10vh', 
                  zIndex: 100,
                  opacity: styles.opacity
                }}
              >
                Copied
              </h1>
            )}
          </Transition>
        ) : null}
      </Fragment>
    );
  }
}
