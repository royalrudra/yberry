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
   console.log("data====",data)
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:5,
      slidesToScroll: 3
    };
    // if(data.length = 0){
    //   return(
    //     <div className="catg" >
    //     <h1>Menu </h1>
    //     <h1>Menu </h1>
    //     <h1>Menu </h1>
    //     </div>
    //   )
    // }
let classstyle=arrayB.map(i=> console.log(i));

        console.log()
    return (

      <div>
        <Slider {...settings}>
          {data.map((item, index) => 
          <div onClick={() => onSelect(index)} className="catg " key={index}>
            <h3 className="cn">{item.title}</h3>
          </div>)}
        </Slider>

      </div>
    )
  }
}
