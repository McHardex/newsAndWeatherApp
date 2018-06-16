import firebase from 'firebase/app'
import 'firebase/auth'

const prodConfig = {
  apiKey: "AIzaSyC5OQ3jB85Qk77u0DKGu2JoA1XHZnby8IU",
  authDomain: "reactauthtut.firebaseapp.com",
  databaseURL: "https://reactauthtut.firebaseio.com",
  projectId: "reactauthtut",
  storageBucket: "reactauthtut.appspot.com",
  messagingSenderId: "643452765923"
};

const devConfig = {
  apiKey: "AIzaSyC5OQ3jB85Qk77u0DKGu2JoA1XHZnby8IU",
  authDomain: "reactauthtut.firebaseapp.com",
  databaseURL: "https://reactauthtut.firebaseio.com",
  projectId: "reactauthtut",
  storageBucket: "reactauthtut.appspot.com",
  messagingSenderId: "643452765923"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
}