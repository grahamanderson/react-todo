import React from 'react';
import {NavLink} from 'react-router-dom';


export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(e){
    e.preventDefault();
    alert('Not yet wired up!')
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Todo App</li>

            <li>
              <NavLink exact to="/"
                activeClassName="active"
                activeStyle={{color:'red'}}>
                Login-Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/login"
                activeClassName="active"
                activeStyle={{color: 'red'}}>
                Login
              </NavLink>
            </li>

            <li>
              <NavLink to="/todos"
                activeClassName="active"
                activeStyle={{color: 'red'}}>
                Todos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      )
    }
  }
