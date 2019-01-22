import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = props => (
  <div className='Logo' style={props.css}>
    <img src={BurgerLogo} alt='Logo' />
  </div>
);

export default logo;