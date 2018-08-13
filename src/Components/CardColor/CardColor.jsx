import React from 'react';

import './CardColor.css';

export default ({currentColor, togglePicker}) => (
  <div 
    className="Card__Color"
    onClick={togglePicker}
    style={{
      backgroundColor: `${currentColor}`,
      cursor: 'pointer'
    }}
  >
  </div>
);
