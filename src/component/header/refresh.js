import React, { Component } from 'react'
import { Button } from 'antd';

export default class Refresh extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  render() {
    return (
      <span className="refresh">
       
        
        <Button type="dashed" loading={this.state.loading} onClick={this.enterLoading}>
        Refresh 
        </Button>
        <Button type="dashed"  >
        Reserved
        </Button>
        
      </span>
    );
  }
}
