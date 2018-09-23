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
           this.state.messages.filter(message => message.roomId === this.props.activeRoom.key).map((message, index) =>

               <div key={index}>
               <li>User: {message.username}
               </li>
               <li>
               Content: {message.content}
               </li>
               <li>
               Time sent: {message.sentAt}
               </li>

               </div>
             )

           }
           </div>
         ) }
         }

export default MessageList;
