import React from 'react';
import {Link} from 'react-router-dom'
const Games=()=>{
    return (
        <div className='mt-10 text-5xl'>
            <div className='grid grid-cols-1 space-evenly md:grid-cols-2'>

                <Link to='/games/rps'>Rock Paper Scissors</Link>
                <Link to='/games/paint'>Paint App</Link>
                <Link to='/games/etchsketch'>Etch-A-sketch</Link>
                <Link to='/games/memorygames'>Memorygames</Link>
            </div>


        </div>
    )
}
export default Games;
