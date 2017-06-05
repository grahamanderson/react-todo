import React from 'react'
import * as redux from 'react-redux'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import Nav from 'Nav'
import * as actions from 'actions'

class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

export class TodoApp extends BaseComponent{

  constructor(props) {
      super(props);
      this._bind('onLogout');
    }

  onLogout(e){
    var {dispatch} = this.props
    e.preventDefault()
    dispatch(actions.startLogout())
  }

  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              {/* <Nav/> */}
              <TodoSearch />
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default redux.connect()(TodoApp)
