import React from 'react'
import club from "../assets/club1.png"
import styled from 'styled-components';
import kbfc from '../assets/club.jpg'

function Club() {
  const Container = styled.div`
  background-color: #8c3131;
  background-image: radial-gradient(#000000 1.7000000000000002px, #c2c2c2 1.7000000000000002px),radial-gradient(#000000 1.7000000000000002px, #f5f5f5 1.7000000000000002px);
  background-size: 68px 68px;
  background-position: 0 0,34px 34px;
  font-family:'Oswald Variable', sans-serif;
}
`;
  return (
    <div className='text-white '>
      <Container className='flex h-[400px] relative'>
<h1 className='text-center font-[900] text-[80px] py-[10px] basis-[60%] mt-auto mb-auto'>ABOUT US</h1>
<img className='md:max-w-[420px] relative max-w-[300px]'  src={club} alt="" />
</Container>
<div className='bg-white pt-[50px] w-full h-full md:flex items-center justify-center place-content-between pb-[50px] '>
    <img src={kbfc} alt=""  className='ml-auto mr-auto w-[500px] h-[500px] ml- relative sm:basis[100%]' />
<p className='text-black basis-[50%]  ml-auto mr-auto sm:basis[100%] '>
<b>Our Heritage: </b>
At the heart of Kerala Blasters FC is a rich tapestry of tradition, culture, and the undying spirit of the fans. We proudly represent the state of Kerala, a land known for its fervent love for football. The club's emblematic yellow and dark blue colors not only mirror the breathtaking landscapes of Kerala but also signify our commitment to creating a legacy in Indian football.
<br/><br/>
<b>Our Vision: </b>
Kerala Blasters FC is more than a football club; it's a movement that aims to inspire, entertain, and uplift communities through the beautiful game. Our vision is to foster a footballing culture that transcends boundaries, uniting people from all walks of life under the common banner of passion for the sport.
<br/><br/>
<b>The Squad: </b>
Meet the extraordinary men who don the Kerala Blasters jersey with pride. Our squad is a diverse blend of seasoned veterans and emerging talents, all driven by a shared goal of achieving greatness on the field. Under the guidance of our dedicated coaching staff, we strive for excellence in every match, pushing the boundaries of what is possible in Indian football.
<br/><br/>
<b>The Fans: </b>
Kerala Blasters FC boasts one of the most dedicated and vocal fan bases in the country – the Yellow Army. The unwavering support of our fans, whether at the stadium or from afar, fuels the team's spirit and adds an unparalleled energy to our journey. Join the Yellow Army in celebrating the highs, navigating the lows, and creating unforgettable memories together.
<br/>
<br/>
Thank you for visiting the official Kerala Blasters FC website. Together, let's create history, celebrate victories, and continue the legacy of football in the heart of Kerala. Blasters, ho!
</p>
</div>





    </div>
  )
}

export default Club
