var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import ReactTestUtils from 'react-dom/test-utils'
var expect = require('expect');
var $ = require('jquery');

var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = ReactTestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    var todoList = ReactTestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
