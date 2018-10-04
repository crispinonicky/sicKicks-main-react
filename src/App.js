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
import { Switch, Route, Redirect } from 'react-router-dom';



class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      loggedInUser: null,
      redirect: false,
     };
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
          // redirect: false,
          loggedInUser:  false
        }) 
      })
    }
  }




  render() {
    console.log(this.state)
    this.fetchUser();


      return (  
        <div>
  
          <div className="move-it-all App another-class">
          <Navbar {...this.props} setTheUserInTheAppComponent={this.logMeIn} userInSession={this.state.loggedInUser} />
          <Route className="for-both" exact path="/" render={() => <Login {...this.props} setTheUserInTheAppComponent={this.logMeIn}/> }/>
          </div>
      

        <Switch>
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/signup" component={Signup} />
        <Signup/>
        </Switch>
      </div>
      );
    }
  // }
}

export default App;

