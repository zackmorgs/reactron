import React, { Component } from 'react';
// import logo from './logo.svg';
import './Styles/css/AppFrame.css';

class AppFrame extends Component {
  render() {
    return (
      <div id="AppFrame">
        {this.props.children}
      </div>
    )
  }
}

export default AppFrame;
