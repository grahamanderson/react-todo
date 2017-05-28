import React from 'react'
import PropTypes from 'prop-types'


export default class Todo extends React.Component{

  constructor(props) {
      super(props);
      // this.thingfunc = this.thingfunc.bind(this)
    }

  // thingfunc(prop) {
  // }

render(){
    const {text, id} = this.props
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
}

Todo.defaultProps = {text: '', id: undefined}
Todo.propTypes = {text: PropTypes.string.isRequired,
                  id: PropTypes.number.isRequired}
