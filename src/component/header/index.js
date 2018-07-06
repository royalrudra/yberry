import React, { Component } from 'react'
import { Button } from 'antd';
import Logo from "../assets/img/logo.png";
import Refresh from "./refresh";

export default class Header extends Component {
  
    render() {
        return (
            <div className="header">
                <div className="header-left">
                <img className="header-logo"    alt="Logo" src={Logo} />
                </div>
                <div className="header-right">
                <Refresh />
                <Button ghost>Log Out</Button>
                </div>

            </div>
        )
    }
}
