import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header/nav-bar';
import SideBar from './components/sidebar/sidebar';
import Main from './components/main_body/main';
import Welcome from './components/subscribe/welcome';
import { string } from 'prop-types';
import Contacts from './components/rest/Contacts';

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

    this.fetchContacts();
  }

  state = {
    contacts: []
  }

  fetchContacts() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const table_row = data.map((single: any,i : number) => {
         return <tr key= {i}>
            <th scope="row">{single.id}</th>
            <td>{single.name}</td>
            <td>{single.username}</td>
            <td>{single.email}</td>
          </tr>
        });
        this.setState({
          contacts : table_row
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
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
