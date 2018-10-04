import React, { Component } from 'react';
import '../App.css';
import Profile from './Profile';




class Lobby extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  
  
    
  render(){
    
      return(
        
     
        <div className="move-this">

        <div>
            <h1>Community</h1>
        </div>

        <div>
        <h1>Fields</h1>
        </div>

        <div>
            <h1>Teams</h1>
        </div>
        </div>
      )
    
    }
}
  export default Lobby;

  // components/About.js

// import React from 'react';

// const Lobby = () => {
//   return (
//     <div>
//       <div>
//         <h1>We da best</h1>


//       </div>
//     </div>
//   )
// }

// export default Lobby;