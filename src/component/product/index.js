import React, { Component } from 'react'
import { Card } from 'antd';
import data from '../assets/data.json'
export default class Product extends Component {
  
      
    render() {
        console.log("data", data)
     const   gridStyle = {
            width: '20%',
            textAlign: 'center',
            height:"190px"
          };
        return (
           <Card title="Card Title">
          {data.map((item,index)=>
 <Card.Grid style={gridStyle} key={index} className="item-self">
 <img className="item-image" src={item.email} />
<p className="item-price">{item.Price}</p> 

 </Card.Grid>
        )}
       
  
  </Card>
        )
    }
}
