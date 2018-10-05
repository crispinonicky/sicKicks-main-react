// import React, { Component } from 'react';
// import '../App.css';


// class Profile extends Component {
//   constructor(props){
//     super(props);
//     this.state = {}
//   }
   
//   render(){
    
//       return(
        
     
//         <div className="Profile">

// <h1>Welcome to Profile, Create a free account!</h1>

// <h2>Name and location:</h2>

// Joey Smith<br/>
// Miami, FL<br/>
// Birthday (if they choose to show it)


// <h2>Summary/Bio:</h2>

// This is where the user's bio will go. They can change it by
// manually editing their own profile.<br/>

// They can also use this to put their skills.


// <h2>Videos: </h2>



// <iframe className="the-video" width="860" height="615" src="https://www.youtube.com/embed/tZSIQ_68VFE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


//         </div>
//       )
    
//     }
// }
//   export default Profile;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileDetails from './auth/ProfileDetails';
import Lobby from './Lobby'


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new ProfileDetails();

  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ loggedInUser: nextProps["userInSession"]})
  }


  logout = () =>{
    this.service.logout()
    .then(()=>{
      this.props.setTheUserInTheAppComponent(null)
      this.props.history.push('/');
    })
  }
    
  render(){
      return(

            <p>Welcome, {this.state.loggedInUser.username}</p>

      )

    }
  }
  export default Profile;