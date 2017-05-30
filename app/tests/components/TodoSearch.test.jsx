import React from 'react'
import ReactDom from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import ReactTestUtils from 'react-dom/test-utils'

import TodoSearch from 'TodoSearch'

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist()
  })

  it('should call onSearch with entered input text', () => {
    const searchText = 'Dog'
    const spy = expect.createSpy()
    const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)

      todoSearch.searchText.value = searchText
      ReactTestUtils.Simulate.change(todoSearch.searchText)
      expect(spy).toHaveBeenCalledWith(false, 'Dog')
    })

    it('should call onSearch with checkbox change', () => {
      const spy = expect.createSpy()
      const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)

        todoSearch.showCompleted.checked = true
        ReactTestUtils.Simulate.change(todoSearch.showCompleted)

        expect(spy).toHaveBeenCalledWith(true, '')
      })
})
