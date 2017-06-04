import React from 'react'
import ReactDOM  from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import * as actions from 'actions'
import TodoApp from 'TodoApp'
var TodoAPI = require('TodoAPI')

// Not sure how to write this one in ES6 :\
var store = require('configureStore').configure();


store.dispatch(actions.startAddTodos())

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
