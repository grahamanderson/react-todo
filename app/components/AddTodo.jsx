import React from 'react'
import PropTypes from 'prop-types'


class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

export default class AddTodo extends BaseComponent {

  constructor(props) {
    super(props)
    // this.state = {};
    // this.handleSubmit = this.handleSubmit.bind(this);
    this._bind('handleSubmit');
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
      <div className="container__footer">
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

AddTodo.defaultProps = {text: '', todoText: ''}
AddTodo.propTypes = {
                    text: PropTypes.string.isRequired,
                    todoText: PropTypes.string.isRequired,
                    onAddTodo: PropTypes.func.isRequired
                    }

// Original
// var React = require('react');
// var createReactClass = require('create-react-class')
//
// var AddTodo = createReactClass({
//   handleSubmit: function (e) {
//     e.preventDefault();
//     var todoText = this.refs.todoText.value;
//
//     if (todoText.length > 0) {
//       this.refs.todoText.value = '';
//       this.props.onAddTodo(todoText);
//     } else {
//       this.refs.todoText.focus();
//     }
//   },
//   render: function () {
//     return (
//       <div className="container__footer">
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" ref="todoText" placeholder="What do you need to do?"/>
//           <button className="button expanded">Add Todo</button>
//         </form>
//       </div>
//     );
//   }
// });
//
// module.exports = AddTodo;
