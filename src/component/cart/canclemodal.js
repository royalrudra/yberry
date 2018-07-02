import React, {Component} from 'react';
import { Modal, Button, Card ,} from 'antd';

export default class Cancelmodal extends React.Component {
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
    this.props.onCancel();
    this.handleCancel();
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
            <Card.Grid onClick={this.showModal} style={gridStyle} className="cart-cancel" >
            <p  className="cart-button-name">Cancel</p>
            </Card.Grid>
    
        <Modal
          visible={visible}
          title="Cancel"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="danger" loading={loading} onClick={this.handleOk}>
             OK
            </Button>,
          ]}
        >
       
          <p >Are you sure, cancel will delete item stored in cart list!</p>
        </Modal>
      </div>
    );
  }
}