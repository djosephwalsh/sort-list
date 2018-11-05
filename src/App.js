import React, { Component } from 'react';
import Products from './Products.js';



class App extends Component {
  render () {
    return (
      <div>
        <header className="App-header"><h1>Sorted List example</h1></header>
        <section>
            <Products></Products>
        </section>
      </div>
    );
  }
}

export default App;