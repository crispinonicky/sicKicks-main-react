import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/auth/ProjectDetails';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import AuthService from './components/auth/auth-service';


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
          <Route exact path="/fields" component={ProjectList}/>
          <Route exact path="/fields/:id" component={ProjectDetails} />
        </Switch>
 </div>


 <div className="for-signup">
<h1 id="for-h1">Create a new account</h1>
<h2 id="for-h1">It's free</h2>
        <Route className="for-both" exact path='/signup' render={() => <Signup setTheUserInTheAppComponent={this.logMeIn}/>}/>
 </div>
      </div>
    );
  }
}

export default App;