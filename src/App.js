import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import router from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {router}
      </div>
    );
  }
}

export default App;
