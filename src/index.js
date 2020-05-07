import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDPp6jk-9DZ4nkNIchWqn-XfBhjoy8TOjY",
  authDomain: "vluxi-owl.firebaseapp.com",
  databaseURL: "https://vluxi-owl.firebaseio.com",
  projectId: "vluxi-owl",
  storageBucket: "vluxi-owl.appspot.com",
  messagingSenderId: "447771116907",
  appId: "1:447771116907:web:736e25ed987d5c990fb82e",
  measurementId: "G-Z46EG3TL7F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
