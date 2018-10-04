import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth/auth-service';
import Lobby from './Lobby'


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();

  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ loggedInUser: nextProps["userInSession"]})
  }


  logout = () =>{
    this.service.logout()
    .then(()=>{
      this.props.setTheUserInTheAppComponent(null)
    })
  }
    
  render(){
    if(this.state.loggedInUser){
      return(
        <nav className="nav-style">
          <ul>
            <li>Welcome, {this.state.loggedInUser.username}</li>
            <li>
              <Link to='/' style={{ textDecoration: 'none' }}>Projects</Link>
            </li>
            <li>
              <Link to='/lobby' style={{ textDecoration: 'none' }}>Lobby</Link>

              </li>
            <li>
              <button onClick={()=>this.logout()}>Logout</button>
            </li>
          </ul>
        </nav>
      )
    } else {
      return (
        <div>
        {/* <nav className="nav-style">
          <ul>
            <li><Link to='/signup' className="whatever">Signup</Link></li>
          </ul>
        </nav> */}
        </div>
      )
    }
    }
  }
  export default Navbar;