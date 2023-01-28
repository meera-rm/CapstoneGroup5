import {useState} from 'react';
import Toggle from './Toggle.js';
const CasualReading=()=>{

    return(
       
        <div >
        <div className='grid grid-cols-1 space-evenly md:grid-cols-2'>
          <p className=' text-center'>CasualReading</p>
        </div>
         <div className='mt-10'>
         <Toggle/>
         </div>
         </div>
    )
}
export default CasualReading;