import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAo3EdUGYMH84852b8iiGAi5PDk9VLeYdE",
  authDomain: "activate-7da3f.firebaseapp.com",
  projectId: "activate-7da3f",
  storageBucket: "activate-7da3f.appspot.com",
  messagingSenderId: "486868340229",
  appId: "1:486868340229:web:a40f9ca99f1644246bd66c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
