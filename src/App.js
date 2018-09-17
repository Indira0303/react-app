import React, { Component } from 'react';
import './App.css';
import * as firebase from "firebase";
import Roomlist from './components/Roomlist';

var config = {
    apiKey: "AIzaSyAYJkJLyZDi2TV-QBn2TxieZuoPJazMPIM",
    authDomain: "chat-rooms-59559.firebaseapp.com",
    databaseURL: "https://chat-rooms-59559.firebaseio.com",
    projectId: "chat-rooms-59559",
    storageBucket: "chat-rooms-59559.appspot.com",
    messagingSenderId: "25003454127"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Bloc Chat
        </header>
<Roomlist firebase = {firebase} />
      </div>
    );
  }
}

export default App;
