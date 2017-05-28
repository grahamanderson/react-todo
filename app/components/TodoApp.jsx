import React from 'react';
import PropTypes from 'prop-types';

import $ from 'jquery'
import '!style-loader!css-loader!foundation-sites/dist/foundation.min.css'
$(document).foundation();



export default class TodoApp extends React.Component{

  constructor(props) {
    super(props);
    this.thingfunc = this.thingfunc.bind(this);
  }

  thingfunc(prop) {
  }

render(){
    return (
      <div>
        <p>TodoApp.jsx</p>
      </div>
    )
  }
}

// Thing.defaultProps = {prop: 0}
// Thing.propTypes = {prop: PropTypes.number}
// Main.propTypes = { children: PropTypes.element.isRequired }
