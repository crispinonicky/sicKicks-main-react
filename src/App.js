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
        // this.props.history.push('/lobby');
          this.setState({
            // redirect: true,
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

//  lobbyIsIn()  {
//    if(this.state.loggedInUser === true) {
//      <Navbar />

//    }
//  }


  render() {
    console.log(this.state)
    this.fetchUser();
    // if(this.state.loggedInUser !== null){
    //   this.setState({redirect: true})
    // } else {
    //   this.setState({redirect: false})
    // }
    // if(this.state.redirect) {
    //   return <Redirect to="/lobby" />
    // } else {

    // (this.state.loggedInUser ? <Redirect to="/lobby" /> : <Redirect to="/" />) 

      return (  
        <div>
  
          <div className="move-it-all App another-class">
          <Navbar {...this.props} setTheUserInTheAppComponent={this.logMeIn} userInSession={this.state.loggedInUser} />
            {/* <Switch>
              <Route className="for-both" exact path="/" render={() => <Login setTheUserInTheAppComponent={this.logMeIn}/>}/>
            </Switch> */}
          </div>
  {/* <li>
  <Link to='/lobby'>Lobby</Link>
</li> */}
        <Switch>
          <Route className="for-both" exact path="/" render={() => <Login {...this.props} setTheUserInTheAppComponent={this.logMeIn}/> }/>
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

