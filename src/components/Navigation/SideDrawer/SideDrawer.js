import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux';

const sideDrawer = props => {
  let sideDrawerClass = props.open ? 'Open' : 'Close';

  return (
    <Aux>
      <Backdrop show={props.open} click={props.close} />
      <div className={`SideDrawer ${sideDrawerClass}`}>
        <Logo css={{ height: '11%', marginBottom: '32px' }} />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
