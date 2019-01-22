import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';

const toolbar = props => (
  <div className='Toolbar'>
    <DrawerToggler toggle={props.drawerToggler} />
    <Logo />
    <nav className='DesktopOnly'>
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;
