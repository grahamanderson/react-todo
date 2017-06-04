import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDgiTyJtpnVFGQXz6ezChdamsjmAKaxt3E",
    authDomain: "graham-todo-app.firebaseapp.com",
    databaseURL: "https://graham-todo-app.firebaseio.com",
    projectId: "graham-todo-app",
    storageBucket: "graham-todo-app.appspot.com",
    messagingSenderId: "512316965435"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Graham',
    age: 25
  }

})


var todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val())
})
todosRef.on('child_changed', (snapshot) => {
  console.log('Todo changed', snapshot.key, snapshot.val())
})

todosRef.on('child_removed', (snapshot) => {
  console.log('Todo removed', snapshot.key, snapshot.val())
})


todosRef.push( {
    text: 'Walk the dog!'
})
todosRef.push( {
    text: 'Brush your teeth!'
})








// var notesRef = firebaseRef.child('notes')
//
// notesRef.on('child added', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val())
// })
//
// notesRef.on('child changed', (snapshot) => {
//   console.log('child changed', snapshot.key, snapshot.val())
// })
//
// notesRef.on('child removed', (snapshot) => {
//   console.log('child removed', snapshot.key, snapshot.val())
// })
//
//
// var newNoteRef = notesRef.push( {
//   text: 'Walk the dog!'
// })

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val())
// }

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val())
// })
//
// firebaseRef.child('user').update({name: 'Mike'})
// firebaseRef.child('app').update({name: 'Something Else'})


// firebaseRef.child('app').once('value').then( (snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val())
// }, (e) => {
//   console.log('Unable to fetch value', e)
// })

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val())
// }
// firebaseRef.on('value', logData)
//
// firebaseRef.off(logData)
//
// firebaseRef.update({isRunning: false})


// firebaseRef.child('user/age').remove()

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// })

// firebaseRef.update({
//   isRunning: null
// })
//
// firebaseRef.child('user/age').remove()




// firebaseRef.update({
//   isRunning: false,
//   'app/version': 'Todo Application'
// })

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Bad Application',
//   'user/name': 'Mike Pence',
// })

// firebaseRef.child('app').update({
//   name: 'My Bad Application'
// }).then( () => {
//   console.log('Update worked!')
// }, (e) => {
//   console.log('it failed!')
// })
//
// firebaseRef.child('user').update({
//   name: 'Donald Trump'
// }).then( () => {
//   console.log('Update worked!')
// }, (e) => {
//   console.log('it failed!')
// })
