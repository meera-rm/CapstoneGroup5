import React from 'react';
import { Link } from 'react-router-dom';
const Games = () => {
  return (
    <div className='mt-10 text-5xl'>
      <div className='grid grid-cols-1 space-evenly md:grid-cols-2'>
        <Link to='/games/rps'><button>Rock Paper Scissors</button></Link>
        <Link to='/games/paint'><button>Paint App</button></Link>
        <Link to='/games/etchsketch'><button>Etch-A-sketch</button></Link>
        <Link to='/games/memorygames'><button>Memorygames</button></Link>
        <Link to='/games/hangman'><button>Hangman</button></Link>
      </div>
    </div>
  );
};
export default Games;
