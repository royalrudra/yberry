import React, { Component } from 'react';
import Sum from "./sum";
import Price from "./price"

export default class Cartlist extends Component {
    render() {
        return (
            <div className="cartlist">
                <p> Cartlist </p>
               <Sum />
               <Price />
            </div>
        )
    }
}
