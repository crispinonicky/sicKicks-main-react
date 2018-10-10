import React, { Component } from 'react';
import axios from 'axios';

class EditTeam extends Component {
  constructor(props){
    super(props);
    this.state = {
        teamName: this.props.theTeam.teamName, 
        league: this.props.theTeam.league,
        details: this.props.theTeam.details
    }
  }

    
  handleFormSubmit = (event) => {
    const teamName = this.state.teamName;
    const league = this.state.league;
    const details = this.state.details;

    event.preventDefault();

    axios.put(process.env.REACT_APP_BASE_URL + `/teams/${this.props.theTeam._id}`, { teamName
    , league, details
  })
    .then( () => {
        // this.props.getTheField();
        // after submitting the form, redirect to '/teams'
        this.props.history.push('/teams');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeTeamName = (event) => {  
    this.setState({
      teamName:event.target.value
    })
  }

  handleChangeLeague = (event) => {  
    this.setState({
      league:event.target.value
    })
  }

  handleChangeDetails = (event) => {  
    this.setState({
      details:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Team Name:</label>
          <input type="text" name="teamName" value={this.state.teamName} onChange={e => this.handleChangeTeamName(e)}/>
          <label>League:</label>
          <input type="text" name="league" value={this.state.league} onChange={e => this.handleChangeLeague(e)}/>
          <br/>
          <label>Details:</label>
          <br/>
          <textarea name="details" value={this.state.details} onChange={ e => this.handleChangeDetails(e)} />
          <br/>
          <input type="submit" value="Submit" className="btn btn-success"  />

          <hr/>
        </form>
      </div>
    )
  }
}

export default EditTeam;