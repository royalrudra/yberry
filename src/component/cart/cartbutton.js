import React, { Component } from 'react';
import { Card } from 'antd';


export default class Cartbutton extends Component {
    render() {
        const   gridStyle = {
            width: '50%',
            textAlign: 'center',
          };
        return (
          
    
   <div>
            <Card.Grid style={gridStyle} className={this.props.cardclass} >
            <p  className="cart-button-name"> {this.props.cardname}</p>
            </Card.Grid>
    </div>
        )
    }
}

