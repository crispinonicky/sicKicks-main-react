// components/teams/AddTeam.js

import React, { Component } from 'react';
import axios from 'axios';


class AddTeam extends Component {
  constructor(props){
      super(props);
      this.state = { teamName: "", league: "" , details: ""};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    // const {teamName, league} = this.state;
    const teamName = this.state.teamName;
    const league = this.state.league;
    const details = this.state.details;
    // axios.post("http://localhost:5000/api/teams", {teamName, league, details })
    axios.post(process.env.BASE_URL + "/teams", {teamName, league, details })
    .then( () => {
        this.props.getData();
        this.setState({teamName: "", league: "", details: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
    //   ^ this is just fancy syntax for the 2 lines below
    //   const name = event.target.name;
    //   const value = event.target.value;

      this.setState({[name]: value});
  }

  render(){
    return(
      <div className = "add-team">
        <form onSubmit={this.handleFormSubmit}>
          <label>Team Name:</label>

          <input type="text" name="teamName" value={this.state.teamName} onChange={ e => this.handleChange(e)}/>
          <br/>
          <label>League:</label>
          <input type="text" name="league" value={this.state.league} onChange={ e => this.handleChange(e)}/> 
          <br/>          <br/>
          <label>Details:</label>
          <br/>
          <textarea name="details" value={this.state.details} onChange={ e => this.handleChange(e)} />
          <br/>          <br/>

                              <input type="submit" value="Submit" />

        </form>
      </div>
    )
  }
}

export default AddTeam;