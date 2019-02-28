import React, { Component } from 'react';
import API from "../utils/API";

class ExampleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  submitExample = (event) => {
    event.preventDefault();

    const title = this.state.title.trim();
    const description = this.state.description.trim();

    if(this.areInputsValid(title, description)) {
      API.saveExample({
        title,
        description
      }).then(() => {
        this.props.history.push('/');
      });
    }
  }

  areInputsValid = (title, description) => {
    if(!title) {
      alert("Please fill out the title");
      return false;
    }

    if(!description) {
      alert("Please fill out the description");
      return false;
    }

    return true;
  }

  render() {
    const title = this.state.title;
    const description = this.state.description;
    
    return (
      <form className="container" onSubmit={this.submitExample}>
        <h1>Create a new Example</h1>
        <div className="form-group">
          <label
            htmlFor="title">
            Title:
          </label>
          <input
            className="form-control" 
            name="title" 
            type="text"
            placeholder="title"
            onChange={this.handleInputChange} 
            value={title} />
        </div>
        <div className="form-group">
          <label 
            htmlFor="description">
            Description:
          </label>
          <textarea 
            className="form-control"
            name="description" 
            placeholder="description"
            onChange={this.handleInputChange}
            value={description} />
        </div>
        <button 
          className="btn btn-primary"
          type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default ExampleForm;
