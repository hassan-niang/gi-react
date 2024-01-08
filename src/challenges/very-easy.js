import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }

  render() {
    <div>
        <h1>Name: John Doe</h1>
        <p>Number: 1234567890</p>
        <p>Date of Birth: January 1, 2000</p>
    </div>
  }
}

export default App;