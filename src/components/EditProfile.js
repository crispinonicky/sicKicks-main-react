// import React, { Component } from 'react';
// import axios from 'axios';

// class EditProfile extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         userName: this.props.theUser.userName, 
//     }
//   }

    
//   handleFormSubmit = (event) => {
//     const userName = this.state.userName;

//     event.preventDefault();

//     axios.put(`http://localhost:5000/api/signup/${this.props.theUser._id}`, { userName,
//   })
//     .then( () => {
//         this.props.getTheUser();
//         // after submitting the form, redirect to '/profile'
//         this.props.history.push('/profile');    
//     })
//     .catch( error => console.log(error) )
//   }

//   handleChangeUserName = (event) => {  
//     this.setState({
//       userName:event.target.value
//     })
//   }

//   // handleChangeLeague = (event) => {  
//   //   this.setState({
//   //     league:event.target.value
//   //   })
//   // }

//   render(){
//     return (
//       <div>
//         <hr />
//         <h3>Edit Profile</h3>
//         <form onSubmit={this.handleFormSubmit}>
//           <label>Username:</label>
//           <input type="text" name="userName" value={this.state.userName} onChange={e => this.handleChangeUserName(e)}/>
//           {/* <label>League:</label>
//           <input type="text" name="league" value={this.state.league} onChange={e => this.handleChangeLeague(e)}/> */}
//           <input type="submit" value="Submit" />
//           <hr/>
//         </form>
//       </div>
//     )
//   }
// }

// export default EditProfile;

import React, { Component } from "react";
import AuthService from "./auth/auth-service";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import "../App.css";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.loggedInUser.username,
      password: this.props.loggedInUser.password,
      firstName: this.props.loggedInUser.firstName,
      lastName: this.props.loggedInUser.lastName,
      email: this.props.loggedInUser.email
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();

  //   axios.put(`http://localhost:5000/api/signup/${this.props.theField._id}`, { firstName, lastName
  //   , email
  // })
    const username = this.state.username;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;

    this.service
      .signup(
        username,
        password,
        firstName,
        lastName,
        email,
      )
      .then(theUserObject => {
        this.setState({
          username: event.target.value,
          password: event.target.value,
          firstName: event.target.value,
          lastName: event.target.value,
          email: event.target.value
        });
        this.props.setTheUserInTheAppComponent(theUserObject);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up-box">
        <div className="for-signup move-the-form signup-box-class">
          <form onSubmit={this.handleFormSubmit}>
            <h1 id="for-h1">Join and become a pro!</h1>
            <br />

            <label>Username</label>
            <input
              className="the-inputs"
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <br />
            <label>Password</label>
            <input
              className="the-inputs"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />

            <br />
            <br />
            <label>First name</label>
            <input
              className="the-inputs"
              name="firstName"
              value={this.state.firstName}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <br />
            <label>Last name</label>
            <input
              className="the-inputs"
              name="lastName"
              value={this.state.lastName}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <br />

            <label>Email</label>
            <input
              className="the-inputs"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <br />

            <input className="the-inputs" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfile;
