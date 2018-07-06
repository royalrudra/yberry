import React, {Component} from 'react';
import {Card} from 'antd';
// import data from '../assets/data.json'
export default class Product extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data, onSelect } = this.props;
       
        console.log("datassss",data.length)
        const gridStyle = {
            width: '20%',
            textAlign: 'center',
                    // height:"190px"
        };
      if(data.length === 0){
          return(
      <div className="centerme">
      <h1>Please Select from Menu</h1>
          </div>)}
        return (
            <Card>
                {data.map((item, index) => 
                <Card.Grid  onClick={() => onSelect(item)}  style={{background: `url(${item.image})`}} key={index} className="item-self product-image">
                    {/* <img className="item-image" src={item.image}/> */}
                    <p className="item-price">Rs.{item.price}</p>
                    <h3 className="item-name">{item.title}
                    </h3>
                </Card.Grid>)}
            </Card>
        )
    }
}
