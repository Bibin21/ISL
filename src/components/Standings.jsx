
import React from "react";
import { useState } from "react";
import islcover from "../assets/islcover.webp";
import styled from 'styled-components'

const Heading = styled.h1`
font-family:'Oswald Variable', sans-serif;
}
`;

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];
const rows = [
    {
      points: "10",
      name: "MOHUN BAGAN",
      role: "CEO",
      status: "Active",
    },
    {
      points: "9",
      name: "KERALA BLASTERS",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      points: "8",
      name: "FC GOA",
      role: "Senior Developer",
      status: "Active",
    },
    {
      points: "7",
      name: "MUMBAI CITY",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
  const columns = [
    {
      points: "name",
      label: "NAME",
    },
    {
      points: "role",
      label: "ROLE",
    },
    {
      points: "status",
      label: "STATUS",
    },
  ];
  

export default function Standings() {
    const [selectedColor, setSelectedColor] = React.useState("default");
  return (
    <div className="flex flex-col justify-center  items-center text-center relative" >
      <Heading className='text-white text-center font-[900] mt-5 text-[60px] py-[10px] z-[5] '>STANDINGS</Heading>
      <h1 className='text-white mb-2 text-center font-[500] text-[20px] py-[10px] z-[5]'>INDIAN SUPER LEAGUE</h1>
 <img src={islcover}  className='absolute brightness-90 hidden md:block' alt="" />
     
        <table className=" !text-white relative" >
            <tr className="!text-white"> <th>POSITION</th> <th>CLUB</th> <th>POINTS</th> </tr>
            {rows.map((item,index)=> {
                return (
          <tr className="hover:border-l-3 hover:border-l-yellow-500"> 
           <td>{index+1}</td><td>{item.name}</td> <td>{item.points}</td>
            </tr>
                ) }
        )}
      
        </table>
 
   </div>
  );
}