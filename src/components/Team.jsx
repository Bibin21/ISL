import React from 'react'
import team from '../team.jpeg'
import styled from 'styled-components';
import card from '../assets/card2.png'
import {p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24} from '../assets/players'
function Team() {
    const Banner = styled.h1`
    background: linear-gradient(180deg,#F2DD21,hsla(0,0%,100%,0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
    display:flex;
    margin-left:auto;
    margin-right:auto;
   
}
`;
const Heading = styled.h1`
font-family:'Oswald Variable', sans-serif;
}
`;
const players=[
    {
        id:"1",name:"KWAME PEPRAH" ,position:"FORWARD" ,im:p1,
    }, {
        id:"2",name:"DIMITRIOS DIAMANTAKOS" ,position:"FORWARD" ,im:p2,
    },
    {
        id:"3",name:"DAISUKE SAKAI" ,position:"FORWARD" ,im:p3,
    },
    {
        id:"4",name:"MOHAMMED AZHAR" ,position:"MIDFIELD" ,im:p4,
    },
    {
        id:"5",name:"DANISH FAROOQ" ,position:"MIDFIELD" ,im:p5,
    },
    {
        id:"6",name:"YOIHENBA MEITEI" ,position:"MIDFIELD" ,im:p6,
    },
    {
        id:"7",name:"FREDDY LALLAWMAWMA" ,position:"MIDFIELD" ,im:p7,
    },
    {
        id:"8",name:"MOHAMMED ARBAZ" ,position:"GOAL KEEPER" ,im:p8,
    },
    {
        id:"9",name:"LARA SHARMA" ,position:"GOAL KEEPER" ,im:p9,
    },
    {
        id:"10",name:"SACHIN SURESH" ,position:"GOAL KEEPER" ,im:p10,
    },
    {
        id:"11",name:"MOHAMMED AIMEN" ,position:"MIDFIELD" ,im:p11,
    },
    {
        id:"12",name:"ISHAN PANDITA" ,position:"FORWARD" ,im:p12,
    },
    {
        id:"13",name:"BIDYASHAGAR SINGH" ,position:"FORWARD" ,im:p13,
    },
    {
        id:"14",name:"VIBIN MOHANAN" ,position:"MIDFIELD" ,im:p14,
    },
    {
        id:"15",name:"SAURAV MANDAL" ,position:"FORWARD" ,im:p15,
    },   {
        id:"16",name:"BRYCE MIRANDA" ,position:"FORWARD" ,im:p16,
    },
    {
        id:"17",name:"NIHAL SUDHEESH" ,position:"FORWARD" ,im:p17,
    },
    {
        id:"18",name:"SANDEEP SINGH" ,position:"DEFENSE" ,im:p18,
    },
    {
        id:"19",name:"JEAKSON SINGH" ,position:"MIDFIELD" ,im:p19,
    },
    {
        id:"20",name:"MARKO LESKOVIC" ,position:"DEFENSE" ,im:p20,
    },
    {
        id:"21",name:"RAHUL KP" ,position:"FORWARD" ,im:p21,
    },
    {
        id:"22",name:"ADRIAN LUNA (C)" ,position:"MIDFIELD" ,im:p22,
    },
    {
        id:"23",name:"RUIVAH HORMIPAM" ,position:"DEFENSE" ,im:p23,
    },
    {
        id:"24",name:"KARANJIT SINGH" ,position:"GOAL KEEPER" ,im:p24,
    }
]

  return (
    <div className='w-full relative '>
     <img src={team} alt="" className='w-full md:h-[550px] h-[370px] ' />
      <Heading className="text-white text-center font-[900] mt-5 text-[70px] py-[10px]">MAIN TEAM</Heading>
      <h1 className='text-[#a49f9f] text-center font-[900] mt-5 text-[40px] py-[10px]'>FORWARD</h1>
      <div className='flex flex-wrap items-center justify-center' > 
      {
      players.map(({id,name,position,im})=>{
        if(position=="FORWARD")
        return (
         
     <div data-scroll data-scroll-class="fadeIn" data-scroll-speed="5" className='op-class w-[400px] h-[550px] ml-[auto] mr-[auto] bg-[black] mb-[-90px]' key={position}>
           <img src={card} alt="" className='w-full h-full brightness-[.8]' />
        <img className='w-[300px] h-[350px] absolute top-[55px] left-[50px]' src={im} alt="" />
        <div className='absolute top-[405px] w-[405px]  flex text-center'>
        <Banner className='font-[700] text-[20px] relative'>{name}</Banner>
        </div>
     </div>
        );
      })
    }
    

      </div>
      <h1 className='text-[#a49f9f] text-center font-[900] mt-5 text-[40px] py-[10px]'>MIDFIELD</h1>
      <div className='flex flex-wrap items-center justify-center' > 
      {
      players.map(({id,name,position,im})=>{
        if(position=="MIDFIELD")
        return (
         
     <div data-scroll data-scroll-class="fadeIn" data-scroll-speed="5" className='op-class w-[400px] h-[550px] ml-[auto] mr-[auto] bg-[black] mb-[-90px]' key={position}>
           <img src={card} alt="" className='w-full h-full brightness-[.8]' />
        <img className='w-[300px] h-[350px] absolute top-[55px] left-[50px]' src={im} alt="" />
        <div className='absolute top-[405px] w-[405px]  flex text-center'>
        <Banner className='font-[700] text-[20px] relative'>{name}</Banner>
        </div>
     </div>
        );
      })
    }
    

      </div>
      <h1 className='text-[#a49f9f] text-center font-[900] mt-5 text-[40px] py-[10px]'>GOAL KEEPER</h1>
      <div className='flex flex-wrap items-center justify-center mb-[60px]' > 
      {
      players.map(({id,name,position,im})=>{
        if(position=="GOAL KEEPER")
        return (
         
     <div data-scroll data-scroll-class="fadeIn" data-scroll-speed="5" className='op-class w-[400px] h-[550px] ml-[auto] mr-[auto] bg-[black] mb-[-90px]' key={position}>
           <img src={card} alt="" className='w-full h-full brightness-[.8]' />
        <img className='w-[300px] h-[350px] absolute top-[55px] left-[50px]' src={im} alt="" />
        <div className='absolute top-[405px] w-[405px]  flex text-center'>
        <Banner className='font-[700] text-[20px] relative'>{name}</Banner>
        </div>
     </div>
        );
      })
    }
    

      </div>
    </div>

  )
}

export default Team