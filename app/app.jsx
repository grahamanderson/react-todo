import * as React from 'react';
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router-dom'
import TodoApp from 'TodoApp'
import PropTypes from 'prop-types'


//Load Foundation
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles')



ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
