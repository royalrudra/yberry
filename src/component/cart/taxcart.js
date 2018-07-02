import React, { Component } from 'react'

export default class Taxcart extends Component {
    constructor(){
        super();
        this.state ={
            taxes:0,
        }
    }


  componentWillReceiveProps=(nextProps)=>{
    this.setState({
        taxes:nextProps.price*13/100
    })
  }
  
    render() {
        return (
            <div>
            <div className="taxpay">
            <p>Taxes</p>
            <p> Rs.{this.state.taxes}</p>
            </div>
             <div className="taxpay">
             <p>Total</p>
             <p> Rs.{this.props.price + this.state.taxes}</p>
             </div>
             </div>
        )
    }
}
