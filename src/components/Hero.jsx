import React, { useEffect } from 'react'
import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {one} from '../assets/swiperimg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useSwiper } from 'swiper/react';


function Hero() {
  return (
   <div className='border-b-5 border-b-blue-500'>
   <img src={one} className='w-full  md:h-full h-[400px] relative ' alt="" />
</div>
  )
}

export default Hero

