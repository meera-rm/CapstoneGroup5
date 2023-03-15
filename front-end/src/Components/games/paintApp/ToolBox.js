import React, {useState, useEffect} from 'react';
import {BsFillPencilFill} from 'react-icons/bs';
import {BsFillPenFill} from 'react-icons/bs';
// import {SiCrayon} from 'react-icons/si';
import {BiText} from 'react-icons/bi';

const ToolBox = (props) => {
//   const tools=['FaPencilAlt']
  return (
    <div>
      <BsFillPenFill/>
      <BsFillPencilFill/>
      {/* <SiCrayon/> */}
      <BiText/>
     {/* crayon,point,line,circle,square,ellipse,triangle,pentagon
      */}
    </div>
  )

}

export default ToolBox;