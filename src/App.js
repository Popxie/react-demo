import React from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 6666,
    };
  }
  render() {
    return (
      <button className="square" onClick={()=> { this.setState({value: 'X'})}}>
        { this.state.value }
      </button>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Learn React
        <Square />
      </header>
    </div>
  );
}

export default App;
