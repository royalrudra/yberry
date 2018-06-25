import React, { Component } from 'react';
import Slider from "react-slick";

export default class Menu extends Component {
    render() {
        let  count=[
            "Packages","Coffee Section","The Bar","Opening Act","Cinemas Sandwichs","The Italian Connections","Kollywood Hits","Enter The Dragon","Sweet Scences"];
          var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 6
          };
        return (
            <div>
                 <Slider {...settings}>
        {count.map((item,index) => 
          <div className="catg" key={index}>
          <h3 className="cn"  >{item}</h3>
        </div>
        
        
        )}
      </Slider>


            </div>
        )
    }
}
