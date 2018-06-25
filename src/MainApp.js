import React, { Component } from 'react';
import Header from "./component/header";
import Cart from "./component/cart";
import Menu from "./component/menu";
import Product from "./component/product";




class Mainapp extends Component {
  render() {
   
     return (
       <div>
       <Header />
       <Menu />
          <div className="item-menu">
              <div className="product">
                      <Product  />
              </div>
              <div className="cart">
                     <Cart className="cart" />
              </div>
       </div>
       </div>
    );
  }
}

export default Mainapp;

