import React from 'react'
import PropTypes from 'prop-types'
import TodoList  from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import uuid from 'uuid'



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
         todos: [
          {id: uuid(), text: 'Walk the dog', completed: false},
          {id: uuid(), text: 'Clean the yard', completed: true},
          {id: uuid(), text: 'Water plants', completed: true},
          {id: uuid(), text: 'Wash dishes', completed: false}
        ]
      }
   }

   handleAddTodo(text){
     this.setState({
       todos: [
         ...this.state.todos,
         {
          id: uuid(),
          text: text,
          completed: false
         }
       ]
     })
   }

   handleToggle(id){
     var updatedTodos = this.state.todos.map( (todo) => {
       if (todo.id === id) {
         todo.completed = !todo.completed
       }
       return todo
   })

   this.setState({todos: updatedTodos})
 }

   handleSearch(){
     this.setState({
       showCompleted: this.state.showCompleted,
       searchText: this.state.searchText.toLowerCase()
     })

   }

  render(){
     const {todos} = this.state
      return (
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos} onToggle={this.handleToggle}/>
          <AddTodo onAddTodo ={this.handleAddTodo} />
        </div>
          )
    }
}

TodoApp.defaultProps = {todos :[]}
TodoApp.propTypes = {todos: PropTypes.array.isRequired}
