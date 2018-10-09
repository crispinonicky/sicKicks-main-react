import React, { Component } from 'react';
import '../App.css';


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
   
  addVideo() {
      console.log('do something')
  }
  
  render(){
    



      return(
        
     
        <div className="profile">

<h1>Welcome to your Profile</h1>

<h2>Name and location:</h2>

Joey Smith<br/>
Miami, FL<br/>
Birthday (if they choose to show it)

<h2>Summary/Bio:</h2>

This is where the user's bio will go. They can change it by
manually editing their own profile.<br/>

They can also use this to put their skills.


<h2>Videos:  <button onClick={this.addVideo}>Add a video</button> </h2>




<iframe className="the-video" width="1000" height="615" src="https://www.youtube.com/embed/tZSIQ_68VFE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


        </div>
      )
    
    }
}
  export default Profile;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import ProfileDetails from './ProfileDetails';
// import Lobby from './Lobby'


// class Profile extends Component {
//   constructor(props){
//     super(props);
//     this.state = { loggedInUser: null };
//     this.service = new ProfileDetails();

//   }
  
//   componentWillReceiveProps(nextProps) {
//     this.setState({ loggedInUser: nextProps["userInSession"]})
//   }


//   logout = () =>{
//     this.service.logout()
//     .then(()=>{
//       this.props.setTheUserInTheAppComponent(null)
//       this.props.history.push('/');
//     })
//   }


//   fetchUser(){
//     if( this.state.loggedInUser === null ){
//       this.service.loggedin()
//       .then(response =>{

//           this.setState({

//             loggedInUser:  response
//         }) 
//       })
//       .catch( err =>{
//         this.setState({
//           // redirect: false,
//           loggedInUser:  false
//         }) 
//       })
//     }
//   }
  
    
//   render(){
//     console.log("==================================", this.state)
//       return(

//             <p>Welcome, {this.state.loggedInUser} </p>

//       )

//     }
//   }
//   export default Profile;