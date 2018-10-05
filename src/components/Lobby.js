import React, { Component } from 'react';
import '../App.css';
import '../index.css';
import Profile from './Profile';
import { Link } from 'react-router-dom';




class Lobby extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  
  
    
  render(){
    
      return(
        
     
        <div className="move-this">

        <div className = "lobby-card first-one">
            <Link to={"/profile"}> Profile</Link>
        </div>

        <div className = "lobby-card first-one">
        <Link to={"/fields"}> Fields</Link>
        </div>

        <div className = "lobby-card first-one">
        <Link to={"/teams"}>Teams</Link>
        </div>

        </div>
      )
    
    }
}
  export default Lobby;

