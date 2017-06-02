import React from 'react'
import PropTypes from 'prop-types'
import Todo from 'Todo'
import {connect} from 'react-redux'

class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

export class TodoList extends BaseComponent{
  constructor(props) {
      super(props);
      // this._bind('onSomeHandler')
    }

  render(){
      const {todos} = this.props
      const renderTodos = () => {
        if (todos.length === 0) {
          return (
            <p className="container__message"> Nothing to Do</p>
          )
        }
        return todos.map((todo) => {
            return (
              <Todo key={todo.id}{...todo} onToggle={this.props.onToggle}/>
            )
          })
      }

      return (
        <div>
          {renderTodos()}
        </div>
      )
    }
}

TodoList.defaultProps = {todos: []}
TodoList.propTypes = {todos: PropTypes.array.isRequired}

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
