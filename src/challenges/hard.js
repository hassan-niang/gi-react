import React, { Component } from 'react';

// BasicInfo component
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
      contacts: [
        { name: 'Hassan Niang', number: '1', dateOfBirth: '09/27/2000' },
        { name: 'Justin Joyner', number: '2', dateOfBirth: '11/13/13' },
        { name: 'Jamieson Joyner', number: '3', dateOfBirth: '1/31/13' },
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.contacts.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;