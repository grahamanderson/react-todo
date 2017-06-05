import React from 'react'
import ReactDOM  from 'react-dom'
import {BrowserRouter, Route, hashHistory } from 'react-router-dom';
import {Provider} from 'react-redux'
// import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import * as actions from 'actions'
import TodoApp from 'TodoApp'
import TodoAPI from 'TodoAPI'
import Login from 'Login'
import Nav from 'Nav'

// Not sure how to write this one in ES6 :\
var store = require('configureStore').configure();


store.dispatch(actions.startAddTodos())

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={hashHistory}>
      <div>
        <Route  exact path='/' component={Login} />
        <Route  exact path='/login' component={Login} />
        <Route  path='/todos' component={TodoApp} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
