import React, { Component } from 'react';
import API from "../utils/API";

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      example: {}
    };
  }

  componentDidMount() {
    API.getExample(this.props.match.params.id)
      .then(res => {
        this.setState({ example: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onDeleteClick = () => {
    const id = this.state.example._id;
    API.deleteExample(id)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const example = this.state.example;
    return (
      <div className="container">
        <article className="card">
          <div className="card-body">
            <h1 className="card-title">{example.title}</h1>
            <h3>{example.date}</h3>
            <section className="card-text">
              {example.description}
            </section>
            <button 
              className="btn btn-danger"
              onClick={this.onDeleteClick}>
              Delete
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Example;
