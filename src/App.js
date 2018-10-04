import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/auth/ProjectDetails';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import AuthService from './components/auth/auth-service';
import Lobby from './components/Lobby';
import { Link } from 'react-router-dom';



import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();  

  }

  logMeIn= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
  

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
          this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }


  render() {
    this.fetchUser();
    return (
      <div>
      <div className="move-it-all App another-class">
        <Navbar  setTheUserInTheAppComponent={this.logMeIn} userInSession={this.state.loggedInUser} />
        <Switch>
        <Route className="for-both" exact path="/" render={() => <Login setTheUserInTheAppComponent={this.logMeIn}/>}/>
        </Switch>
 </div>

{/* <Lobby /> */}
<Signup/>

 </div>

    );
  }
}

export default App;

