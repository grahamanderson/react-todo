import React from 'react'
import PropTypes from 'prop-types'
import {connect}  from 'react-redux'
import * as  actions from 'actions'


class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

export class AddTodo extends BaseComponent {

  constructor(props) {
    super(props)
    this._bind('handleSubmit');
  }

  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    // var todoText = this.todoText

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }


  render(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="What do you need to do?"  ref="todoText"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
      )
    }
}

AddTodo.defaultProps = {text: '', todoText: ''}
AddTodo.propTypes = {
                    text: PropTypes.string,
                    todoText: PropTypes.string,
                    onAddTodo: PropTypes.func
                    }

export default connect()(AddTodo);


// Non working ES6 form :\
{/* <div className="container__footer">
  <form onSubmit={this.handleSubmit}>
    <input type="text"
      ref={(input) => this.todoText = input}
      placeholder="What do you need to do?"/>
    <button className="button expanded">Add Todo</button>
  </form>
</div> */}

// handleSubmit(e){
//   e.preventDefault()
//   var {dispatch} = this.props
//   var todoText = this.mytodoText
//   console.log('the todo text is ', this.todoText)
//   if (todoText.length > 0) {
//     this.mytodoText = ''
//     dispatch(actions.startAddTodo(todoText));
//   } else {
//     this.mytodoText.focus();
//   }
// }
