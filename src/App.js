import React, { Component } from 'react';
import Button from 'antd/lib/button';
import FirstComponent from './components/study/FirstComponent';
import logo from './logo.svg';
import './App.css';
import Counter from './components/study/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Antd Button</Button>
        <FirstComponent name="조미남"></FirstComponent>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
