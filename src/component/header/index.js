import React, { Component } from 'react'
import { Button } from 'antd';
import Logo from "../assets/img/logo.png";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                <img className="header-logo"    alt="Logo" src={Logo} />
                </div>
                <div className="header-right">
                <Button ghost>Primary</Button>
                </div>

            </div>
        )
    }
}
