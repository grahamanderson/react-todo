import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import * as  actions from 'actions'



class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

export class Todo extends BaseComponent{
  // constructor(props) {
  //     super(props);
  //     // this._bind('onSomeHandler');
  //   }

  // onSomeHandler(prop) {
  // }
  // componentDidMount() {
  //
  // }

  render(){
      var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
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
      <div className = {todoClassName} onClick={() => {
        dispatch(actions.startToggleTodo(id, !completed));
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
  createdAt: PropTypes.number,
  completedAt: PropTypes.number,
  dispatch: PropTypes.func
}

export default connect()(Todo);
