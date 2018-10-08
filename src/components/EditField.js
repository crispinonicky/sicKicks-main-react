import React, { Component } from 'react';
import axios from 'axios';

class EditField extends Component {
  constructor(props){
    super(props);
    this.state = {
        teamsPlaying: this.props.theField.teamsPlaying, 
        // description: this.props.theField.description
    }
  }

    
  handleFormSubmit = (event) => {
    const teamsPlaying = this.state.teamsPlaying;
    // const description = this.state.description;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/fields/${this.props.theField._id}`, { teamsPlaying
    // , description 
  })
    .then( () => {
        this.props.getTheField();
        // after submitting the form, redirect to '/fields'
        this.props.history.push('/fields');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeTeamsPlaying = (event) => {  
    this.setState({
      teamsPlaying:event.target.value
    })
  }

  // handleChangeDesc = (event) => {  
  //   this.setState({
  //     description:event.target.value
  //   })
  // }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="teamsPlaying" value={this.state.teamsPlaying} onChange={e => this.handleChangeTeamsPlaying(e)}/>
          {/* <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} /> */}
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditField;