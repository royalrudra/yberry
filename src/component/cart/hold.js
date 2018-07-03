import React, { Component } from 'react';
import { Card } from 'antd';

export default class Hold extends Component {
    constructor(){
        super();

    }
    handleClick=()=>{
       
        this.props.onHoldclick()
      }
    render() {
        const   gridStyle = {
            width: '100%',
            textAlign: 'center',
          };
       
        return (
            <div>
               <Card.Grid onClick={this.handleClick} style={gridStyle} className="cart-hold" >
            <p  className="cart-button-name">Hold</p>
            </Card.Grid>
            </div>
        )
    }
}
