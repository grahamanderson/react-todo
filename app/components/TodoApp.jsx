import React from 'react'
import PropTypes from 'prop-types'
import TodoList  from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'



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
          {id: 1, text: 'Walk the dog'},
          {id: 2, text: 'Clean the yard'},
          {id: 3, text: 'Water plants'},
          {id: 4, text: 'Wash dishes'}
        ]
      }
   }

   handleAddTodo(text){
     alert('new todo:' + text)
   }

   handleSearch(){
     this.setState({
       showCompleted: showCompleted,
       searchText: searchText.toLowerCase()
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

TodoApp.defaultProps = {todo: []}
TodoApp.propTypes = {todo: PropTypes.array.isRequired}
