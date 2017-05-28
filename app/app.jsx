import * as React from 'react';
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import TodoApp from 'TodoApp'

//Load Foundation
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles')



ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
