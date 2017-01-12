
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AppNavDrawer from './AppNavDrawer';


class App extends Component {
  state = {
    navDrawerOpen: false,
  };

  handleTouchTapLeftIconButton = () => {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  };

  handleChangeRequestNavDrawer = (open, reason) => {
    console.log({ open, reason });
    this.setState({
      navDrawerOpen: open,
    });
  };

  render() {
    const { navDrawerOpen } = this.state;
    let docked = false;

    return (
      <div>
        <AppBar title={'my create react app'}
          style={{ position: 'fixed', top: 0 }}
					onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton} />
        <AppNavDrawer docked={docked} open={navDrawerOpen} 
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer} />
      </div>
    );
  }
}

export default App;

/*
 * <div className="App">
 *   <div className="App-header">
 *     <img src={logo} className="App-logo" alt="logo" />
 *     <h2>Welcome to React</h2>
 *   </div>
 *   <p className="App-intro">
 *     To get started, edit <code>src/App.js</code> and save to reload.
 *   </p>
 * </div>
 */
