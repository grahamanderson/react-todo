import React from 'react'
import PropTypes from 'prop-types'
import Todo from 'Todo'

class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

export default class TodoList extends BaseComponent{
  constructor(props) {
      super(props);
      // this._bind('handler')
    }

  render(){
      const {todos} = this.props

      const renderTodos = () => {
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
