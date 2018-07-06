import React, {Component} from 'react';
import Slider from "react-slick";

export default class Menu extends Component {
  constructor(){
    super();
  }
  
  render() {
   let arrayA = ['red','black','green'];
let repeats = 3;
 let arrayB = Array.apply(null, {length: repeats * arrayA.length})
          .map(function(e,i){return arrayA[i % arrayA.length]});
    
    const {data, onSelect} = this.props;
  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:3,
      slidesToScroll: 3
    };
   

       
    return (

      <div>
        <Slider {...settings}>
          {data.map((item, index) => 
          <div onClick={() => onSelect(index)} className="catg "  key={index}>
            <h3 className="cn">{item.title}</h3>
          </div>)}
        </Slider>

      </div>
    )
  }
}
