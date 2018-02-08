import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import MuscleGroups from './Components/MuscleGroups'

class App extends Component {

  state = {
    response: {}
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/getAllWorkouts');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
            good.
          </Alert>
          {JSON.stringify(this.state.response)}
        </p>

        <MuscleGroups/>


      </div>
    );
  }
}

export default App;
