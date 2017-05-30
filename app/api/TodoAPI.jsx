import $ from 'jquery'

module.exports = {
  setTodos(todos) {
    if($.isArray(todos)){
        localStorage.setItem('todos', JSON.stringify(todos))
        return todos
    }

  },

  getTodos(){
    const stringTodos = localStorage.getItem('todos')
    let todos = []

    try {
      todos = JSON.parse(stringTodos)
    } catch(e) {

    }

    return $.isArray(todos) ? todos : []
  }
}


// [
// {id: uuid(), text: 'Walk the dog', completed: false},
// {id: uuid(), text: 'Clean the yard', completed: true},
// {id: uuid(), text: 'Water plants', completed: true},
// {id: uuid(), text: 'Wash dishes', completed: false}
// ]
