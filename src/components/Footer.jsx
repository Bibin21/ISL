import React from 'react'
import logo from '../assets/kbfc/logo.png'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai';

function Footer() {
  return (
    <div className='bg-[#1E6DEB] w-full h-[200px] md:h-[150px]  flex flex-col md:flex-row  items-center md:items-start justify-center relative'>
        <div className='flex md:justify-start justify-center w-[100%] relative'>
<img src={logo} className='md:w-[150px] md:h-[150px] w-[120px] h-[120px] ml-[20px] '  alt="" />

</div>
        <h2 className='text-[#bab2b2] mt-[20px] md:absolute'> Kerala Blasters Football Club</h2>
        <div className='flex '>
        <a className='text-[30px] p-[10px]' href="https://www.facebook.com/keralablasters/"><AiFillFacebook /></a>
        <a className='text-[30px]   p-[10px]' href="https://www.instagram.com/keralablasters/?hl=en"><AiFillInstagram/></a>
        <a className='text-[30px]  p-[10px]' href="https://twitter.com/KeralaBlasters"><AiFillTwitterCircle/></a>
       <a className='text-[30px]  p-[10px]' href="https://www.youtube.com/channel/UCCRfkpYF70QoUffbC5emuyw"><AiFillYoutube/></a>
        </div>
    </div>
  )
}

export default Footer