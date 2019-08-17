import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header/nav-bar';
import SideBar from './components/sidebar/sidebar';
import Main from './components/main_body/main';

class App extends Component {
  render() {
    return (
      <div className="demo">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
