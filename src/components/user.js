import React, { Component } from 'react';

class User extends Component{


 componentDidMount(){
         this.props.firebase.auth().onAuthStateChanged( user => {
             this.props.setUser(user);
           })};

signIn(e) {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );
}

signOut(e){
  this.props.firebase.auth().signOut()
}

displayName(){
var user =this.props.firebase.auth().currentUser;

if (user) { return this.props.user.displayName
  // User is signed in.
} else { return "Guest"
  // No user is signed in.
}}

  render() {
    return(
    <div className = "sign">
    <p>{this.displayName()}</p>
    <button onClick={(e) => this.signIn(e)}> Sign in </button>
    <button onClick={(e) => this.signOut(e)} > Sign out </button>

    </div>
);
}
  }




  export default User;
