import React, { Component } from 'react';

import AppFrame from './AppFrame';
// import TopFrame from './TopFrame';
// import BottomNav from './BottomNav'

// import logo from './logo.svg';
import './Styles/css/App.css';

import Hello from './../Components/Hello';

// personally I like to have a container for everything in the app for state changes and such

class App extends Component {
  render() {
    return (
      // frame is just here so i can add ui to a bordered-type element
      <AppFrame>
        {/* example component w' props */}
        {/* right-click goto def for more */}
        <Hello To='React & Electron'/>
      </AppFrame>
    );
  }
}

export default App;
