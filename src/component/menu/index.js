import React, {Component} from 'react';
import Slider from "react-slick";

export default class Menu extends Component {
  render() {
    console.log("menu",this.props.data)
    const {data, onSelect} = this.props;
   console.log("data====",data)
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:  2,
      slidesToScroll: 2
    };
    if(data.length = 0){
      return(
        <div className="catg" >
        <h1>Menu </h1>
        <h1>Menu </h1>
        <h1>Menu </h1>
        </div>
      )
    }
    return (

      <div>
        <Slider {...settings}>
          {data.map((item, index) => <div onClick={() => onSelect(index)} className="catg" key={index}>
            <h3 className="cn">{item.title}</h3>
          </div>)}
        </Slider>

      </div>
    )
  }
}
