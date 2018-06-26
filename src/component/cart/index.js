import React, { Component } from 'react';
import { Card } from 'antd';
import Cartbutton from "./cartbutton"
import Cartlist from "./cartlist";
import Taxpay from "./taxpay"

export default class Cart extends Component {
    render() {
      
        return (
            <Card title="Cart"  className="cart-header">
               <Cartlist />
              
                <div className="Card-buttons">
                <Taxpay />
                < Cartbutton cardclass="cart-card"  cardname="card" />
                < Cartbutton cardclass="cart-cash"  cardname="cart" />
                < Cartbutton cardclass="cart-note"  cardname="note" />
                < Cartbutton cardclass="cart-cancel"  cardname="cancel" />
                </div>
          </Card>
        )
    }
}

