export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export const addTodo = (text)=> {
  // console.log('text is: ', text)
  return {
    type: 'ADD_TODO',
    text
  }
}

// toggleShowCompleted generator
export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',

  }
}


// toggleShowCompleted generator
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
