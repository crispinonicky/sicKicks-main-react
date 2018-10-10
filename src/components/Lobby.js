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
        
     
        <div className="move-this different-class lobby">

        <div className = "lobby-card first-one">
            <Link to={"/profile"}> Profile</Link>
            <p>Tell us more about yourself and showcase your abilities!</p>
        </div>

        <div className = "lobby-card first-one">
        <Link to={"/fields"}> Fields</Link>
        <p>Search for a place to practice or compete!</p>
        </div>

        <div className = "lobby-card first-one">
        <Link to={"/teams"}>Teams</Link>
        <p>Scout and join an existing team, or create your own!</p>
        </div>

        </div>
      )
    
    }
}
  export default Lobby;

