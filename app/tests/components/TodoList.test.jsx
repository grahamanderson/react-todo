import React from 'react';
import ReactDom from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import ReactTestUtils from 'react-dom/test-utils'
import TodoList from 'TodoList'
import Todo from 'Todo'

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  })

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {id: 1, text: 'Do Something'},
      {id: 2, text: 'Check mail'},
    ]

    const todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos} />)
    const todosComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList, Todo)
    expect(todosComponents.length).toBe(todos.length)
  })
})
