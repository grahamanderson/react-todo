import React from 'react'
import PropTypes from 'prop-types'
import Todo from 'Todo'


export default class TodoList extends React.Component{

  constructor(props) {
      super(props);
      // this.thingfunc = this.thingfunc.bind(this)
    }

  render(){
      const {todos} = this.props

      const renderTodos = () => {
        return todos.map((todo) => {
            return <Todo key={todo.id}{...todo}/>
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
