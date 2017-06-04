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
  },

  filterTodos(todos, showCompleted, searchText) {
    var filteredTodos = todos

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter( (todo) => {
      return !todo.completed || showCompleted
    })

    // Filter by Search text
    filteredTodos = filteredTodos.filter( (todo) => {
      var text = todo.text.toLowerCase()
      return searchText.length === 0 || text.indexOf(searchText) > -1
    })

    // Sort todos with non-completed first. A and B are todo items in the list
    filteredTodos.sort( (a,b) => {
      if (!a.completed &&  b.completed) {
        return -1  // a comes before b  --a and be are todo items
      }else if (a.completed && !b.completed) {
        return 1  // a comes after b
      }else {
        return 0  // a = b, no reason to resort
      }
    })

    // console.log(JSON.stringify(filteredTodos))
    return filteredTodos
  }
}
