import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header/nav-bar';
import SideBar from './components/sidebar/sidebar';
import Main from './components/main_body/main';

const data = [
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur'],
  ['1,014','per','inceptos','himenaeos','Curabitur']
];

class App extends Component {
  render() {
    return (
      <div className="demo">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <Main data = { data }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
