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
    const {text, id, completed} = this.props
    return (
      <div onClick={()=>{
        this.props.onToggle(id)
      }}>
        <input type="checkbox" checked={completed} />
        {text}
      </div>
    )
  }
}

Todo.defaultProps = {text: '', id: undefined, completed: false}
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}
