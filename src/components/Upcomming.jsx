import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import isl from '../assets/kbfc/isl.png';
import 'swiper/css';

var data={
"matches":[
{"team":"HYDERABAD" ,"date":"25 NOV" ,"time" : "8:00 PM"},
{"team":"CHENNAIYIN" ,"date":"29 NOV" ,"time" : "8:00 PM" },
{"team":"FC GOA" ,"date":"3 DEC" ,"time" : "8:00 PM" },
{"team":"PUNJAB FC" ,"date":"14 DEC" ,"time" : "8:00 PM" },
{"team":"MUMBAI CITY" ,"date":"24 DEC" ,"time" : "8:00 PM" },
{"team":"MOHUN BAGAN" ,"date":"27 DEC" ,"time" : "8:00 PM" }
]

}

function Upcomming() {
  
  const swiper = useSwiper('.swiper', {
    mousewheel: {
      invert: true,
    },
    freeMode: {
      enabled: true,
      sticky: true,
    },
    pagination: { clickable: true },
  });
  return (
   
    <div className='w-fit h-fit bg-black relative flex py-[2px]'>
     <Swiper
      modules={[Thumbs]}
    spaceBetween={0}
    watchOverflow
    watchSlidesProgress
    
    slidesPerView={3}
  >
    {
     data.matches.map((team,i) => {
      return (
        <SwiperSlide className='!w-fit h-[fit] relative transition-background 200ms ease-in-out delay-0 hover:bg-[#131313] '>
      <div className='w-[400px] h-[500px]  border-white border-1 border-collapse'> 
      <div className='m-10'>
      <img src={isl} className='w-[90px] h-[80px]' alt="" />
      <br />
      <h3 className='text-white font-[600] text-[17px]'  >KERALA BLASTERS</h3>
      <h3 className='text-[#a49f9f] font-[600] text-[17px]'> {data.matches[i].team}</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 className='text-white font-[900] text-[70px] tracking-[-.01em]'>{data.matches[i].date}</h3>
      <h3 className='text-[#d0cbcb] font-[900] text-[25px] tracking-[-.01em]'>{data.matches[i].time}</h3>

      </div>
     
      </div>
      </SwiperSlide>
      )
     })
 }
  </Swiper>

    </div>
    
  )
}

export default Upcomming