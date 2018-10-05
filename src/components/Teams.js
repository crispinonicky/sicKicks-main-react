import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddTeam from './AddTeam';

class Teams extends Component {
  constructor(){
      super();
      this.state = { listOfTeams: [] };
  }

  getAllTeams = () =>{
    axios.get(`http://localhost:5000/api/teams`)
    .then(responseFromApi => {
      this.setState({
        listOfTeams: responseFromApi.data
      })
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  componentDidMount() {
    this.getAllTeams();
  }

  render(){
    return(
      <div>
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfTeams.map((team, index) => {
            return (
              <div key={team._id}>
                <Link to={`/teams/${team._id}`}>
                  <h3>{team.teamsPlaying}</h3>
                </Link>
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddTeam getData={() => this.getAllTeams()}/>
        </div>
      </div>
    )
  }
}

export default Teams;