import React, {Component} from 'react';
import Sum from "./sum";
import Price from "./price"

export default class Cartlist extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="cartlist">
                <p>
                    Cartlist
                </p>
                <div>
                    <i className="fa fa-plus-square " aria-hidden="true"></i>
                    1
                    <i className="fa fa-minus-square " aria-hidden="true"></i>
                </div>
                <div>
                    Rs.33
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>               
            </div>
        )
    }
}
