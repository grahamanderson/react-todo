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
      this._bind('handleAddTodo', 'handleSearch');
      // this.handleAddTodo = this.handleAddTodo.bind(this)
      // this.handleSearch = this.handleSearch.bind(this)

      this.state = {
        showCompleted: false,
        searchText: '',
         todos: [
          {id: uuid(), text: 'Walk the dog'},
          {id: uuid(), text: 'Clean the yard'},
          {id: uuid(), text: 'Water plants'},
          {id: uuid(), text: 'Wash dishes'}
        ]
      }
   }

   handleAddTodo(text){
     this.setState({
       todos: [
         ...this.state.todos,
         {
          id: uuid(),
          text: text
         }
       ]
     })
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
          <div>
            <TodoList todos={todos} />
            <AddTodo onAddTodo ={this.handleAddTodo} />
          </div>
        </div>
          )
    }
}

TodoApp.defaultProps = {todos :[]}
TodoApp.propTypes = {todos: PropTypes.array.isRequired}
