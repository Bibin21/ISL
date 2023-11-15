import React from 'react'
import Hero from './Hero'
import Upcomming from './Upcomming'
import Marquee from './Marquee'
import Standings from './Standings'
import Partners from './Partners'
import styled from 'styled-components'


function Home() {
  
  const Container = styled.div`

}
`;
const Heading = styled.h1`
font-family:'Oswald Variable', sans-serif;
}
`;
  return (
    <div>
      <div className=' w-full relative'>
      <Hero/>
      </div>
      <Container className=" h-fit w-full text-white mt-[100px] mb-[100px]" >
      <div className='relative'>
        <Standings />
        </div>
      </Container>
      <Heading className='text-center font-[700] text-[40px] text-[#FFFFFF] bg-[#1E6DEB] py-[10px]'>UPCOMMING MATCHES</Heading>
      <div className='h-[505px] w-max relative bg-black '>
      <Upcomming/>
      </div>
      <Marquee key="marquee" />
      <Heading className='text-white text-center font-[600] mt-5 text-[50px] py-[10px]'>PARTNERS</Heading>
   
      <Partners/>
  
     
   
     
    
     
    </div>
  )
}

export default Home