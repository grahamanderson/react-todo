import firebase from 'firebase'

try {
  var config = {
      apiKey: "AIzaSyDgiTyJtpnVFGQXz6ezChdamsjmAKaxt3E",
      authDomain: "graham-todo-app.firebaseapp.com",
      databaseURL: "https://graham-todo-app.firebaseio.com",
      projectId: "graham-todo-app",
      storageBucket: "graham-todo-app.appspot.com",
      messagingSenderId: "512316965435"
    };

    firebase.initializeApp(config);
} catch (e) {
  console.log('Error connecting with firebase', e)
}

export var firebaseRef = firebase.database().ref()
export default firebase
