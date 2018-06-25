import React, { Component } from 'react';
import Header from "./component/header";
import Cart from "./component/cart";
import Menu from "./component/menu";
import Product from "./component/product";
import './App.css';

class App extends Component {

 
  render() {

    return (
      <div className="App">
      
       <Header />
        <Menu/>
        <Product />
        <Cart />

      </div>
    );
  }
}

export default App;

