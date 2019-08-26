import React from 'react';
import { UserContext } from '../UserContext';

const ComponentB = () => {
   return <UserContext.Consumer>
       {
           ({sideOption})=>{
            return (
                <div>
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span data-feather="home"></span>
                      Dashboard <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file"></span>
                      {sideOption}
                </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="shopping-cart"></span>
                      {sideOption}
                </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="users"></span>
                      {sideOption}
                </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="bar-chart-2"></span>
                      {sideOption}
                </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="layers"></span>
                      {sideOption}
                </a>
                  </li>
                </ul>
              </div>
            </nav>
                </div>
            );
           }
       }
   </UserContext.Consumer>
};

export default ComponentB;