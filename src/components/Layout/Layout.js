import React from 'react';
import './Layout.css';
import Aux from '../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends React.Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerrToggleHandler = () => {
    this.setState(state => {
      return {
        showSideDrawer: !state.showSideDrawer
      };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggler={this.sideDrawerrToggleHandler} />
        <SideDrawer
          close={this.sideDrawerCloseHandler}
          open={this.state.showSideDrawer}
        />
        <main className='Content'>{this.props.children}</main>
      </Aux>
    );
  }
}
export default layout;
