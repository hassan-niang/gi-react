import React, { Component } from 'react';

const BasicInfo = ({ person }) => {
    return (
      <div>
        <h1>Name: {person.name}</h1>
        <p>Number: {person.number}</p>
        <p>Date of Birth: {person.dateOfBirth}</p>
      </div>
    );
  };
  
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        person: {
          name: 'John Doe',
          number: '1234567890',
          dateOfBirth: 'January 1, 2000'
        }
      };
    }
  
    render() {
      return <BasicInfo person={this.state.person} />;
    }
  }
export default App;