
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { zIndex } from 'material-ui/styles';

class AppNavDrawer extends Component {

  render() {
    const { docked, open, onRequestChangeNavDrawer } = this.props;

    return (
      <Drawer docked={docked} open={open} 
        containerStyle={{zIndex: zIndex.drawer - 100}}
        onRequestChange={onRequestChangeNavDrawer}>
        <div>
          my drawer
        </div>
      </Drawer>
    );
  }
}

export default AppNavDrawer;

