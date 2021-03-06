import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Todo from 'Todo'
import TodoAPI from 'TodoAPI'


class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

export class TodoList extends BaseComponent{
  render() {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return filteredTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

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
    return state
  }
)(TodoList);
