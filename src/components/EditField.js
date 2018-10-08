import React, { Component } from 'react';
import axios from 'axios';

class EditField extends Component {
  constructor(props){
    super(props);
    this.state = {
        teamsPlaying: this.props.theField.teamsPlaying, 
        fieldName: this.props.theField.fieldName
    }
  }

    
  handleFormSubmit = (event) => {
    const teamsPlaying = this.state.teamsPlaying;
    const fieldName = this.state.fieldName;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/fields/${this.props.theField._id}`, { teamsPlaying
    , fieldName 
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

  handleChangeFieldName = (event) => {  
    this.setState({
      fieldName:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Teams Playing:</label>
          <input type="text" name="teamsPlaying" value={this.state.teamsPlaying} onChange={e => this.handleChangeTeamsPlaying(e)}/>
          <label>Field Name:</label>
          <input type="text" name="fieldName" value={this.state.fieldName} onChange={e => this.handleChangeFieldName(e)}/>
          <input type="submit" value="Submit" />
          <hr/>
        </form>
      </div>
    )
  }
}

export default EditField;