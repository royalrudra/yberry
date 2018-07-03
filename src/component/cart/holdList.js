import React, { Component } from 'react';
import { Form, Select, Input, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

export default class Holdlist extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange = (value) => {
    console.log(value);
   
  }
  option =()=>{
    let count = this.props.hold.length;
    for(let i = 0; i < count; i++  ){
      return(

      <h1>{i}
</h1>
      )
     
    }
    
  }
  

  render() {
   

   console.log("hold",this.props.hold)
    return (
      <Form onSubmit={this.handleSubmit}>
       
        <FormItem className="hold-list"
          
       
        >
          
            <Select 
           placeholder="Hold"
              onChange={this.handleSelectChange}
            >
            {/* {this.option} */}
            
                <Option value="hold">Hold </Option>
               
              
            </Select>
          
        </FormItem>
      
      </Form>
    );
  }
}
