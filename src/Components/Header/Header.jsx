import React from 'react';

import LogoImage from '../../Assets/Images/roulette.svg';
import './Header.css';

export default _ => (
  <header className="Header">
    <h1 className="Header__Title">
      <span style={{color: "#ffffff"}}>Color</span> 
      <span style={{color: "#ff4757"}}>Picker</span>
    </h1>
    <img 
      src={LogoImage}
      alt="Logo Image"
      className="Header__Logo"
    />
  </header>
);