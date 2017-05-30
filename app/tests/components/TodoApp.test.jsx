import React from 'react';
import ReactDom from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import ReactTestUtils from 'react-dom/test-utils'
import TodoApp from 'TodoApp'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  })

  it('should add todo to the todos state on the handleAddTodo', () => {
    const todoText = 'test text'
    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>)

    todoApp.setState({todos: []})
    todoApp.handleAddTodo(todoText)

    expect(todoApp.state.todos[0].text).toBe(todoText)
  })
})
