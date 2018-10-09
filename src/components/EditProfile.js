import React, { Component } from 'react';
import axios from 'axios';

class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
        userName: this.props.theUser.userName, 
    }
  }

    
  handleFormSubmit = (event) => {
    const userName = this.state.userName;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/signup/${this.props.theUser._id}`, { userName,
  })
    .then( () => {
        this.props.getTheUser();
        // after submitting the form, redirect to '/profile'
        this.props.history.push('/profile');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeUserName = (event) => {  
    this.setState({
      userName:event.target.value
    })
  }

  // handleChangeLeague = (event) => {  
  //   this.setState({
  //     league:event.target.value
  //   })
  // }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit Profile</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="userName" value={this.state.userName} onChange={e => this.handleChangeUserName(e)}/>
          {/* <label>League:</label>
          <input type="text" name="league" value={this.state.league} onChange={e => this.handleChangeLeague(e)}/> */}
          <input type="submit" value="Submit" />
          <hr/>
        </form>
      </div>
    )
  }
}

export default EditProfile;