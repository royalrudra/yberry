import React, { Component } from 'react';

import { Menu, Dropdown, Button ,Card} from 'antd';

import Cartbutton from "./cartbutton";
import Taxpay from "./taxpay";
import Taxcart from "./taxcart";
import Cardmodal from "./Cardmodal";
import Paymodal from "./paymodal";
import Notemodal from "./notemodal";
import Cancelmodal from "./canclemodal";
import Hold from "./hold";
import Holdlist from "./holdList";


  

export default class Cart extends Component {
    constructor(){
        super();

    }

    
    render() { 
    const { data, onReduce, onAdd, cartTotal, onClear ,hold} = this.props;
        return (
            <Card   className="cart-header">
            <div className="cart-cart">
            <h1>Cart</h1>
               <Holdlist  hold={hold} />
            </div>
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
                <Taxcart price={cartTotal} />
                <Cardmodal banks={this.props.banks} />
                 <Paymodal totalPrice={cartTotal} />       
                <Notemodal />
                <Cancelmodal onCancel={this.props.onCancel} />
                <Hold onHoldclick={this.props.onHoldclick} />
              
                </div>
          </Card>
        )
    }
}

const CartItem = ({item, onReduce, onAdd, onClear}) => (
    <div className="cartlist">
                <p>
                    {item.title}
                </p>
                <div className="cartlistdiv">
                    <i className="fa fa-plus-square " onClick={onAdd} aria-hidden="true"></i>
                    {item.count}
                    <i className="fa fa-minus-square " onClick={onReduce} aria-hidden="true"></i>
                </div>
                <div className="cartlistprice">
                    Rs.{item.totalPrice}
                    <i class="fa fa-times" onClick={onClear} aria-hidden="true"></i>
                </div>               
            </div>
)