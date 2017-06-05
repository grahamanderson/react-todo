import firebase from 'firebase';

const API_KEY = '****************************'
const AUTH_DOMAIN = '*********************'
const DATABASE_URL= '*******************'
const STORAGE_BUCKET=''


try {
  var config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    storageBucket: STORAGE_BUCKET,
  };

  firebase.initializeApp(config);
} catch (e) {

}


console.log('api key: ', config.apiKey)


// try {
//   var config = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     storageBucket: process.env.STORAGE_BUCKET,
//   };
//
//   firebase.initializeApp(config);
// } catch (e) {
//
// }
//
// console.log('api key: ', process.env.API_KEY)


export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
