import React, { Component } from 'react';
import { Card } from 'antd';


export default class Cardgrid extends Component {
    render() {
        const   gridStyle = {
            width: '50%',
            textAlign: 'center',
            // height:"190px"
          };
        return (
          
    

<Card.Grid style={gridStyle} className="cart-card" ><p  className="cart-button-name">{this.props.cardname}</p></Card.Grid>
         
        )
    }
}

