import React, {Component} from 'react';
import { Button, Modal, Form, Input, Radio,Card } from 'antd';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      
      return (
        <Modal
          visible={visible}
          title="Note"
          okText="Ok"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Note">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the Note!' }],
              })(
                <Input />
              )}
            </FormItem>
        
           
          </Form>
        </Modal>
      );
    }
  }
);

export default class Notemodal extends React.Component {
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

      console.log('Received values of form: ', values);
      form.resetFields();
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
        
        <Card.Grid onClick={this.showModal} style={gridStyle} className="cart-note" >
            <p  className="cart-button-name">Note</p>
            </Card.Grid>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
