import React, {Component} from 'react';
import { Modal, Button, Card ,} from 'antd';

export default class modal extends React.Component {
  state = {
    loading: false,
    visible: false,
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    const   gridStyle = {
        width: '50%',
        textAlign: 'center',
      };
    return (
       <div>
            <Card.Grid onClick={this.showModal} style={gridStyle} className="cart-cash" >
            <p  className="cart-button-name">Pay</p>
            </Card.Grid>
    
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}