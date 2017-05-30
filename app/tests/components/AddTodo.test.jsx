import React from 'react'
import ReactDom from 'react-dom'
import expect from 'expect'
import $ from 'jQuery';
import ReactTestUtils from 'react-dom/test-utils'

import AddTodo from 'AddTodo'

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should call onAddTodo when text is entered', () => {
    var spy = expect.createSpy()
    var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    var $el = $(ReactDom.findDOMNode(addTodo))

    addTodo.todoText.value = 'mad hatter'
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith('mad hatter')
  })

  it('should not call onAddTodo when invalid input', () => {
    var todoText =''
    var spy = expect.createSpy()
    var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    var $el = $(ReactDom.findDOMNode(addTodo))

    addTodo.todoText.value = todoText
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })


})
