import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'


export default class Todo extends React.Component{

  constructor(props) {
      super(props);
      // this.thingfunc = this.thingfunc.bind(this)
    }

  // thingfunc(prop) {
  // }

  render(){
      const {text, id, completed, createdAt, completedAt} = this.props
      const todoClassName = completed ? 'todo todo-completed' : 'todo'
      let renderedDate = () => {
        let message = 'Created'
        let timestamp = createdAt

        if (completed) {
          message = 'Completed '
          timestamp = completedAt
        }

        return `${message}  ${moment.unix(timestamp)
          .format('MMM Do YYYY @ h:mm a')}`
      }

    return (
      <div className = {todoClassName} onClick={()=>{
        this.props.onToggle(id)
      }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderedDate()}</p>
        </div>
      </div>
    )
  }
}

Todo.defaultProps = {text: '', id: undefined, completed: false}
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  createdAt: PropTypes.number,
  completedAt: PropTypes.number
}
