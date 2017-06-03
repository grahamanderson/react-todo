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

  handleSubmit(e){
    e.preventDefault()
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
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

export default connect()(AddTodo);

// Form with ES6 ref --which doesn;t Workflow<div
//   <form ref={(ref) => this.form = ref} onSubmit={this.handleSubmit} className="form">
//     <input type="text"
//       ref={(input) => this.todoText = input}
//       placeholder="What do you need to do" />
//     <div className="text-center larger small-centered">
//       <button className="button expanded">Add Todo</button>
//     </div>
//   </form>
// </div>
