import React from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('text string is: ', this.todoText.value)
    const todoText = this.todoText.value

    if (todoText.length > 0) {
      this.todoText.value = ''
      this.props.onAddTodo(todoText)
    }else{
        this.todoText.focus()
    }
  }

  render(){
    return (
      <div>
        <form ref={(ref) => this.form = ref} onSubmit={this.handleSubmit} className="form">
          <input type="text"
            ref={(input) => this.todoText = input}
            placeholder="What do you need to do" />
          <div className="text-center larger small-centered">
            <button className="button expanded">Add Todo</button>
          </div>
        </form>
      </div>
      )
  }
}

// AddTodo.defaultProps = {text: '', todoText: ''}
// AddTodo.propTypes = {
//                     text: PropTypes.string.isRequired,
//                     todoText: PropTypes.string.isRequired,
//                     onAddTodo: PropTypes.func.isRequired
//                     }
