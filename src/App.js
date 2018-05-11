import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
// import Wizard from './Component/Wizard/Wizard'
import router from './routes'

class App extends Component {
  render() {
    return (
      <div className= 'App'>
        <Header />
       <div className= 'grBox'>
        {router}
        </div>
      </div>
    );
  }
}

export default App;
