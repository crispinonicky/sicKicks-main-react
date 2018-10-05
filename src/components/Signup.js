
import React, { Component } from 'react';
import AuthService from './auth/auth-service';
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import '../App.css';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', firstName: '', lastName: '', playerPosition: "", favoriteClub: "", email: "", };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const playerPosition = this.state.playerPosition;
    const favoriteClub = this.state.favoriteClub;
    const email = this.state.email;
  
    this.service.signup(username, password)
    .then( theUserObject => {
        this.setState({
            username: "", 
            password: "",
            firstName: "",
            lastName: "",
            playerPosition: "",
            favoriteClub: "",
            email: "",
        });
        this.props.setTheUserInTheAppComponent(theUserObject)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      
  
  render(){
    return(
      <div className="for-signup">
        <form className="move-the-form" onSubmit={this.handleFormSubmit}>
        <h1 id="for-h1">Create a new account</h1>
<h2 id="for-h1">It's free</h2> 
          <label>Username</label>
          <input className="the-inputs" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <br/>
          <br/>
          <label>Password</label>
          <input className="the-inputs" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />

<br/>
<br/>
          <label>First name</label>
          <input className="the-inputs" name="firstName" value={this.state.firstName} onChange={ e => this.handleChange(e)} />
<br/>
<br/>
          <label>Last name</label>
          <input className="the-inputs" name="lastName" value={this.state.lastName} onChange={ e => this.handleChange(e)}/>
          <br/><br/>

          <label>Favorite Club</label>
          <input className="the-inputs" name="favoriteClub" value={this.state.favoriteClub} onChange={ e => this.handleChange(e)}/>
          <br/><br/>

          <label>Player position</label>
          <input className="the-inputs" name="playerPosition" value={this.state.playerPosition} onChange={ e => this.handleChange(e)}/>
          <br/><br/>

          <label>Email</label>
          <input className="the-inputs" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <br/><br/>

          <input className="the-inputs" type="submit" value="Signup" />
        </form>
  
        <p className="the-h1-main">Already have account? 
            {/* <Link className="whatever" to={"/"}> Login</Link> */}
        </p>
  
      </div>
    )
  }


}

export default Signup;