import React from 'react'
import PropTypes from 'prop-types'
import TodoList  from 'TodoList'
//
// import $ from 'jquery'
// import '!style-loader!css-loader!foundation-sites/dist/foundation.min.css'
// $(document).foundation();



export default class TodoApp extends React.Component{

  constructor(props) {
      super(props);
      // this.thingfunc = this.thingfunc.bind(this)
      this.state = {
         todos: [
          {id: 1, text: 'Walk the dog'},
          {id: 2,text: 'Clean the yard'},
          {id: 3,text: 'Water plants'},
          {id: 4,text: 'Wash dishes'}
          ]
      }
   }

  render(){
     const {todos} = this.state
      return (
        <div>
          <TodoList todos={todos} />
        </div>
      )
    }
}

TodoApp.defaultProps = {todo: []}
TodoApp.propTypes = {todo: PropTypes.array.isRequired}
