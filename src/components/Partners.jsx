import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from "react";

import {i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13} from "../assets/partners";
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height=(window.innerHeight > 0) ? window.innerHeight : screen.height;

export default class Partners extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: (width<height)? 2: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 500,
      cssEase: "linear"
    };
    const partners=[i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13];
    return (

      <div className="place-content-between mt-10 justify-center mb-[60px]">

        <Slider {...settings}>
  
            
                <div  >
                  <img src={partners[0]}   alt="" />

                </div>
                <div  >
                  <img src={partners[1]}  alt="" />

                </div>
                <div >
                  <img src={partners[2]}   alt="" />

                </div>
                <div >
                  <img src={partners[3]}   alt="" />

                </div>
                <div   >
                  <img src={partners[4]}   alt="" />

                </div>
                <div >
                  <img src={partners[5]}   alt="" />

                </div>
                <div  >
                  <img src={partners[6]}   alt="" />

                </div>
                <div  >
                  <img src={partners[7]}   alt="" />

                </div>
                <div  >
                  <img src={partners[8]}   alt="" />

                </div>
                <div  c >
                  <img src={partners[9]}   alt="" />

                </div>
                <div  >
                  <img src={partners[10]}   alt="" />

                </div>
                <div >
                  <img src={partners[11]}   alt="" />

                </div>
                <div >
                  <img src={partners[12]}   alt="" />

                </div>
               
          
        </Slider>
      </div>
    );
  }
}
