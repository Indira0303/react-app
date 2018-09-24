import React, { Component } from 'react';
import './App.css';

import * as firebase from "firebase";
import Roomlist from './components/Roomlist';
import MessageList from './components/MessageList';
import User from './components/user';

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

    constructor(props) {
     super(props);
     this.state = {
       activeRoom: '',
       user: '',

   };
}
  setActive(room) {
    this.setState({activeRoom: room});
    console.log ("Active")
  }

  setUser(user){
      this.setState({user: user})
      console.log(user)
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> Bloc Chat</h1>
        </header>
        <main>
<Roomlist firebase = {firebase} activeRoom = {this.state.activeRoom} setActive ={this.setActive.bind(this)} />
<MessageList firebase = {firebase} activeRoom = {this.state.activeRoom} setActive ={this.setActive.bind(this)} />
<User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user} />
</main>
      </div>
    );
  }
}

export default App;
