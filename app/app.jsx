import * as React from 'react';
import ReactDOM from 'react-dom'
var {Provider} = require('react-redux');
import {Route, Router, IndexRoute, hashHistory} from 'react-router-dom'

import TodoApp from 'TodoApp'
import PropTypes from 'prop-types'

import * as actions from 'actions'
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState())
})

store.dispatch(actions.addTodo('Clean the Yard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())

//Load Foundation
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles')



ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
