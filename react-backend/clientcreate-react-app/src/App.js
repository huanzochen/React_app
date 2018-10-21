import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <h1>第12組</h1>
        {this.state.users.map(user =>
          <div key={user.id}>第{user.id}位同學 {user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
