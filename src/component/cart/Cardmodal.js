import React, {Component} from 'react';
import { Button, Modal, Form, Input, Radio,Card  , Select,
   } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
   
      constructor(){
        super();
       
        this.state = {
         cardtype:"unknown"
        };
      
      }
  
      change =e =>{
        console.log(e)
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    handleSubmit=()=>{
      console.log("something has changed")
    }
    render() {
      const { visible, onCancel, onCreate, form,banks } = this.props;
      const { getFieldDecorator } = form;
     
     

      return (
        <Modal
          visible={visible}
          title="Card"
          okText="Pay"
          onCancel={onCancel}
          onOk={onCreate}
        >
           <Form onSubmit={this.handleSubmit}>
              <FormItem
        //   {...formItemLayout}
          label="Select Bank"
          hasFeedback
           
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: 'Please select Card!' },
            ],
          })(
            <Select placeholder="Please select Card">
            {
                banks.map(item=>{
                    return(
                        <Option value={item.bank}>{item.bank}</Option>
                    )
                   
                })
            }
             
             
            </Select>
          )}
        </FormItem>
        </Form>
        </Modal>
      );
    }
  }
);

export default class Cardmodal extends React.Component {
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
      this.props.onCardpay();
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
        
        <Card.Grid onClick={this.showModal} style={gridStyle} className="cart-card" >
            <p  className="cart-button-name">Card</p>
            </Card.Grid>
        <CollectionCreateForm
        banks={this.props.banks}
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
