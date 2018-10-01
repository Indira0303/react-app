import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      newMessage: '',

    };

    this.messagesRef = this.props.firebase.database().ref('messages');
    }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({messages: this.state.messages.concat( message )})
    });
  }



  handleSubmit(e) {
    e.preventDefault();
    this.messagesRef.push({
      content: this.state.newMessage,
      username: this.props.user.displayName,
      roomId: this.props.activeRoom.key,
      sentAt: this.props.sentAt
    })

  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ newMessage: e.target.value })
  }

  render() {
    return(
      <div className="messages">
      <h1>{this.props.activeRoom.name}</h1>
      {
        this.state.messages.filter(message => message.roomId === this.props.activeRoom.key).map((message, index) =>

        <div key={index}>
        <li id = "user"> User: {message.username}
        </li>
        <li>
        Content: {message.content}
        </li>
        <li>
        Time sent: {message.sentAt}
        </li> </div>


      )

    }

    <form onSubmit={ (e) => this.handleSubmit(e) }>
    <input type="text" value={ this.state.newMessage } onChange={ (e) => this.handleChange(e) }  />
    <input type="submit" value="Add Message" />
    </form>
    </div>
  ) }
}

export default MessageList;
