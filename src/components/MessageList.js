import React, { Component } from 'react';

 class MessageList extends Component {
   constructor(props) {
    super(props);

    this.state = {
    messages: [],

  };

   this.roomsRef = this.props.firebase.database().ref('messages');
}

componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const message = snapshot.val();
       message.key = snapshot.key;
       this.setState({messages: this.state.messages.concat( message )})
     });
   }
   render() {
     return(
       <div className="messages">
       <h1>{this.props.activeRoom.name}</h1>
                  {
           this.state.messages.map((message) =>


               <li>User: {message.username}
               </li>
               <li>
               Content: {message.content}
               </li>
               <li>
               Time sent: {message.sentAt}
               </li>


             )}
             </div>
           );
           }
         }

export default MessageList;
