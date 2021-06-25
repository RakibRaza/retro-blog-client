import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAu6NqK3FMDXurCY9lG3UU6rzoi95l6B18",
  authDomain: "retro-blogger.firebaseapp.com",
  projectId: "retro-blogger",
  storageBucket: "retro-blogger.appspot.com",
  messagingSenderId: "1005053947354",
  appId: "1:1005053947354:web:286a6a98525892b73f64e3"
})

export default auth = app.auth()