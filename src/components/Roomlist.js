import React, { Component } from 'react';

 class Roomlist extends Component {
   constructor(props) {
    super(props);

    this.state = {
    rooms: [],
newRoomName: ''
  };

   this.roomsRef = this.props.firebase.database().ref('rooms');
}

componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({rooms: this.state.rooms.concat( room )})
     });
   }


   handleSubmit(e) {
  e.preventDefault();
  if (!this.state.newRoomName) { return }
  const newRoom = { description: this.state.newRoomName, isCompleted: false };
  this.setState({ rooms: [...this.state.rooms, newRoom], newRoomName: '' });

  this.roomsRef.push({name: this.state.newRoomName })
}

   handleChange(e) {
     e.preventDefault();
        this.setState({ newRoomName: e.target.value })
      }


  render() {
    return(
      <div>
        <ul className = "roomList">
        {
          this.state.rooms.map((room, index) =>
              <li key={index} onClick={(e) => this.props.setActive(e)}>
              {room.name}
              </li>
            )}


          <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" value={ this.state.newRoomName } onChange={ (e) => this.handleChange(e) }  />
           <input type="submit" value="Add Room" />
         </form>
           </ul>
  </div>
          );
          }
        }

      export default Roomlist;
