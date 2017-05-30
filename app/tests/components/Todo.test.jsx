import React from 'react';
import ReactDom from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import ReactTestUtils from 'react-dom/test-utils'
import Todo from 'Todo'

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  })

  it('should call onToggle prop with id on click', () => {
    var todoData= {
      id:199,
      text: 'Write todo.text.jsx test',
      completed: true
    }
    var spy = expect.createSpy()
    var todo = ReactTestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />)

    var $el = $(ReactDom.findDOMNode(todo))

    ReactTestUtils.Simulate.click($el[0])

    expect(spy).toHaveBeenCalledWith(199)
  })
})
