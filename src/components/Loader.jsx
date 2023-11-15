import React from 'react'
import loader from '../assets/loader.gif'

function Loader() {
  return (
    <div className='w-[100%] h-[100vh] bg-black z-[5] flex justify-center items-center'>
        <img className=' bg-black'  src={loader} alt="" />
    </div>
  )
}

export default Loader