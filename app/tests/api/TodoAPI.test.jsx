import expect from 'expect'
import TodoAPI from 'TodoAPI'


describe('TodoAPI', () => {
  beforeEach(()=> {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoAPI).toExist()
  })

  describe('setTodos', ( )=> {
    it('should set valid todos array', ()=> {
      var todos = [{
        id:23,
        test: 'test all files',
        completed: false
      }]
      TodoAPI.setTodos(todos)

      var actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos)
    })

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'}
      TodoAPI.setTodos(badTodos)

      expect(localStorage.getItem('todos')).toBe(null)
    })
  })

  describe('setTodos', ( ) => {
    it('should return empty array for bad localstorage data', () =>{
      var actualTodos = TodoAPI.getTodos()
      expect(actualTodos).toEqual([])
    })

  })

  it('should return todo if valid array in localstorage', () => {
    var todos = [{
      id:23,
      test: 'test all files',
      completed: false
    }]
    localStorage.setItem('todos', JSON.stringify(todos))

    var actualTodos = TodoAPI.getTodos()

    expect(actualTodos).toEqual(todos)
  })


})

  // describe('setTodos', ( )=> {
  //
  // })




  //
  // it('should call onToggle prop with id on click', () => {
  //   var todoData= {
  //     id:199,
  //     text: 'Write todo.text.jsx test',
  //     completed: true
  //   }
  //   var spy = expect.createSpy()
  //   var todo = ReactTestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />)
  //
  //   var $el = $(ReactDom.findDOMNode(todo))
  //
  //   ReactTestUtils.Simulate.click($el[0])
  //
  //   expect(spy).toHaveBeenCalledWith(199)
  //   })
