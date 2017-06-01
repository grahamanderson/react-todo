import React from 'react'
import uuid from 'uuid'

import PropTypes from 'prop-types'
import TodoList  from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import TodoAPI from 'TodoAPI'
import moment from 'moment'




class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

export default class TodoApp extends BaseComponent{

  constructor(props) {
      super(props);
      this._bind('handleAddTodo', 'handleSearch', 'handleToggle');
      // this.handleAddTodo = this.handleAddTodo.bind(this)
      // this.handleSearch = this.handleSearch.bind(this)

      this.state = {
        showCompleted: false,
        searchText: '',
        todos: TodoAPI.getTodos()
      }
   }


   componentDidUpdate(){
     TodoAPI.setTodos(this.state.todos)
   }

   handleAddTodo(text){
     this.setState({
       todos: [
         ...this.state.todos,
         {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
         }
       ]
     })
   }

   handleToggle(id){
     var updatedTodos = this.state.todos.map( (todo) => {
       if (todo.id === id) {
         todo.completed = !todo.completed
         todo.completedAt = todo.completed ? moment().unix(): undefined
       }
       return todo
   })

   this.setState({todos: updatedTodos})
 }

   handleSearch(showCompleted, searchText){
     this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()

     })
      console.log(this.state.showCompleted, this.state.searchText )
   }

  render(){
     const {todos, showCompleted, searchText} = this.state
     var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

      return (
        <div>
          <h1 className = "page-title">Todo App</h1>

          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo ={this.handleAddTodo} />
              </div>
            </div>
          </div>
        </div>

          )
      }
  }

TodoApp.defaultProps = {todos :[]}
TodoApp.propTypes = {todos: PropTypes.array.isRequired}
