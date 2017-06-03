import React from 'react'
import ReactDOM  from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import TodoApp from 'TodoApp'
var TodoAPI = require('TodoAPI')

import * as actions from 'actions'

// Not sure how to write this one in ES6 :\
var store = require('configureStore').configure();



store.subscribe(() => {
  var state = store.getState()
  console.log('New state', state);
  TodoAPI.setTodos(state.todos)
});

var initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))


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
