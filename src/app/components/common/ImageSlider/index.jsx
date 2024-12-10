'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ImageSlider extends Component {
  render() {
    var settings = {
      dots: false,
      arrows:true,
      infinite: true,
      autoplay: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      loop:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows:true,
          }
        }
      ]
    };

    return (
      <Slider className="imageSlider" {...settings}>
        <div className="">
          <img className="object-contain m-auto" src="/images/service-2.webp" alt="Logo image" />
        </div>
        <div className="">
          <img className="object-contain m-auto" src="/images/service-2.webp" alt="Logo image" />
        </div>
        <div className="">
          <img className="object-contain m-auto" src="/images/service-2.webp" alt="Logo image" />
        </div>
      </Slider>
    );
  }
}
