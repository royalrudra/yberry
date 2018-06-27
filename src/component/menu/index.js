import React, {Component} from 'react';
import Slider from "react-slick";

export default class Menu extends Component {
  render() {
    const {data, onSelect} = this.props;
    // let  count=[     "Packages","Coffee Section","The Bar","Opening Act","Cinemas
    // Sandwichs","The Italian Connections","Kollywood Hits","Enter The
    // Dragon","Sweet Scences"];
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div>
        <Slider {...settings}>
          {data.map((item, index) => <div onClick={() => onSelect(index)} className="catg" key={index}>
            <h3 className="cn">{item.name}</h3>
          </div>)}
        </Slider>

      </div>
    )
  }
}
