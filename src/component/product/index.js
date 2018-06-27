import React, {Component} from 'react'
import {Card} from 'antd';
// import data from '../assets/data.json'
export default class Product extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data, onSelect } = this.props;
        const gridStyle = {
            width: '20%',
            textAlign: 'center',
            // height:"190px"
        };
        return (
            <Card >
                {data.map((item, index) => <Card.Grid onClick={() => onSelect(item)} style={gridStyle} key={index} className="item-self">
                    <img className="item-image" src="http://dummyimage.com/250x250.bmp/ff4444/ffffff"/>
                    <p className="item-price">{item.price}</p>
                    <h3 className="item-name">{item.name}
                    </h3>
                </Card.Grid>)}

            </Card>
        )
    }
}
