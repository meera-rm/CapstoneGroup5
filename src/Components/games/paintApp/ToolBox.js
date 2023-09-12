import React, {useState, useEffect} from 'react';
import {BsFillPencilFill} from 'react-icons/bs';
import {BsFillPenFill} from 'react-icons/bs';
// import {SiCrayon} from 'react-icons/si';
import {BiText} from 'react-icons/bi';
import {BsDot} from 'react-icons/bs';
import {AiOutlineLine} from 'react-icons/ai';
import {BsCircle} from 'react-icons/bs';
import {BsSquare} from 'react-icons/bs';
import {BsTriangle} from 'react-icons/bs';
import {BsPentagon} from 'react-icons/bs';

const ToolBox = (props) => {
//   const tools=['FaPencilAlt']
  return (
    <div>
      <BsFillPenFill/>
      <BsFillPencilFill/>
      {/* <SiCrayon/> */}
      <BiText/>
      <BsDot/>
      <AiOutlineLine/>
      <BsCircle/>
      <BsSquare/>
      <BsTriangle/>
      <BsPentagon/>
     {/* crayon,point,line,circle,square,ellipse,triangle,pentagon
      */}
    </div>
  )

}

export default ToolBox;

