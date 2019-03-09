import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    showStockFinder: false
  }

  render() {
    let stockFinder = null;
    if(this.state.showStockFinder){
      stockFinder = <uc-stock-finder></uc-stock-finder>;
    }
    return (
      <div className="App">
      <h2>Hello From React</h2>
        <uc-stock-price></uc-stock-price>
        {stockFinder}
        <button onClick={()=> this.setState({showStockFinder:true})}>Show Finder</button>
      </div>
    );
  }
}

export default App;
