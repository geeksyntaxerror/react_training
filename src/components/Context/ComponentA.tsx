import React from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import { UserContext } from '../UserContext';

const ComponentA = () => {
    return <UserContext.Consumer>
    { ({companyName,username})=>{
       return(<div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{companyName}</a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">{username}</a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <ComponentB />
                    <ComponentC />
                </div>
            </div>
        </div>)
    }}</UserContext.Consumer>
}

export default ComponentA;