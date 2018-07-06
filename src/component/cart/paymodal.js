import React, {Component} from 'react';
import { Button, Modal, Form, Input, Radio,Card } from 'antd';
import {addtocart} from "../fetch";

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    constructor(){
      super();
     
      this.state = {
        number:0
      };
    
    }

    change =e =>{
        
      this.setState({
          [e.target.name]:e.target.value
      });
  };
 
    
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      
      return (
        <Modal
          visible={visible}
          title="Cash"
          okText="Pay"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <h1>Total Price: {this.props.totalPrice + this.props.totalPrice*13/100}</h1>
          <Form layout="vertical">

            <FormItem label="Cash">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the Cash!' }],
              })(
                <Input 
                type="number"
                name="number"
                value={this.state.number}
                onChange={e=>this.change(e)} />
              )}
            </FormItem>
        
           
          </Form>
          <h1>Return Cash: {this.state.number - this.props.totalPrice - this.props.totalPrice*13/100} </h1>
        </Modal>
      );
    }
  }
);

export default class Paymodal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }



  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      form.resetFields();
      addtocart();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    const   gridStyle = {
        width: '50%',
        textAlign: 'center',
      };
    return (
      <div>
        
        <Card.Grid onClick={this.showModal} style={gridStyle} className="cart-cash" >
            <p  className="cart-button-name">Pay</p>
            </Card.Grid>
        <CollectionCreateForm
        totalPrice={this.props.totalPrice}
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
