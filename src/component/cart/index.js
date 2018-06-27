import React, { Component } from 'react';
import { Card } from 'antd';
import Cartbutton from "./cartbutton"
import Cartlist from "./cartlist";
import Taxpay from "./taxpay"

export default class Cart extends Component {
    render() {
    const { data, onReduce, onAdd, cartTotal, onClear } = this.props;
        return (
            <Card title="Cart"  className="cart-header">
                <div className="cart-list">
                    {data.map(item => <CartItem 
                        item={item} 
                        key={item.id} 
                        onReduce={() => onReduce(item)}
                        onAdd={() => onAdd(item)}
                        onClear={() => onClear(item)}
                    />)}
                </div>
               {/* <Cartlist data={data}/> */}
              
                <div className="Card-buttons">
                <Taxpay name="Sub-Total" price={cartTotal} />
                <Taxpay name="Taxes" price="Rs.100" />
                <Taxpay name="Total" price="Rs.300" />
                < Cartbutton cardclass="cart-card"  cardname="card" />
                < Cartbutton cardclass="cart-cash"  cardname="cart" />
                < Cartbutton cardclass="cart-note"  cardname="note" />
                < Cartbutton cardclass="cart-cancel"  cardname="cancel" />
                </div>
          </Card>
        )
    }
}

const CartItem = ({item, onReduce, onAdd, onClear}) => (
    <div className="cartlist">
                <p>
                    {item.name}
                </p>
                <div>
                    <i className="fa fa-plus-square " onClick={onAdd} aria-hidden="true"></i>
                    {item.count}
                    <i className="fa fa-minus-square " onClick={onReduce} aria-hidden="true"></i>
                </div>
                <div>
                    Rs.{item.totalPrice}
                    <i class="fa fa-times" onClick={onClear} aria-hidden="true"></i>
                </div>               
            </div>
)