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

  it('should toggle completed value when handleToggle is called', () => {
    const todoData =  {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }

    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(true)
    expect(todoApp.state.todos[0].completedAt).toBeA('number')


  })

  it('should toggle todo from completed to incompleted', () => {
    const todoData =  {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    }

    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(true)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(false)
    expect(todoApp.state.todos[0].completedAt).toNotExist()
  })


  //
})
