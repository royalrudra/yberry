import React, { Component } from 'react'

export default class Taxpay extends Component {
    render() {
        return (
            <div className="taxpay">
                <p> {this.props.name}</p>
                <p> {this.props.price}</p>
            </div>
        )
    }
}
