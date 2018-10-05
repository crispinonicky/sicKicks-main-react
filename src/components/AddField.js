import React, { Component } from 'react';
import axios from 'axios';


class AddField extends Component {
  constructor(props){
      super(props);
      this.state = { 
        teamsPlaying: [], 


       };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    // const {teamsPlaying} = this.state;
    const teamsPlaying = this.state.teamsPlaying;
    axios.post("http://localhost:5000/api/fields", {teamsPlaying})
    .then( () => {
        this.props.getData();
        this.setState({TeamsPlaying: []});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const teamsPlaying = event.target.teamsPlaying;
    //   ^ this is just fancy syntax for the 2 lines below
    //   const name = event.target.name;
    //   const value = event.target.value;

      this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject;