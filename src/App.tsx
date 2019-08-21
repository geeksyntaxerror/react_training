import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header/nav-bar';
import SideBar from './components/sidebar/sidebar';
import Main from './components/main_body/main';
import Welcome from './components/subscribe/welcome';
import { string } from 'prop-types';
import Contacts from './components/rest/Contacts';
import Login from './components/login/login';
import SelectBox from './components/box/SelectBox';

const data = [
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur'],
  ['1,014', 'per', 'inceptos', 'himenaeos', 'Curabitur']
];


class App extends Component {

  constructor(props: any) {
    super(props)

  }

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          contacts : data
        })
      })
  }

  public cont = [];



  render() {
    return (
      <div className="demo">
        {/* <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <Main data = { data }/>
          </div>
        </div> */}
        {/* <Welcome /> */}
        {/* <Contacts contacts={this.state.contacts} /> */}
        {/* <Login/> */}
        <SelectBox />
      </div>
    );
  }
}

export default App;
