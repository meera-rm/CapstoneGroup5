import React from 'react';
import { Link } from 'react-router-dom';
import './Games.scss';

const Games = () => {
  return (
    <div className='mt-10 text-3xl'>
      <div className='grid sm:grid-cols-1 space-evenly lg:grid-cols-2 gap-4'>
        <Link to='/games/rps' className='rpscolor' >
          <div className='rpscontent' >Rock Paper Scissors</div>
          </Link>
          <Link to='/games/hangman' className='rpscolor'> 
            <div className='hangman'>Guess The Word</div>
          </Link>
          <Link to='/games/paint'  className='rpscolor'>
            <div className='paintapp'>Paint App</div>
          </Link>
          <Link to='/games/memorygames'  className='rpscolor'>
            <div className='memorygame'>Memorygames</div>
          </Link>
           {/* <Link to='/games/tictactoe' className='rpscolor'>
            <div className='tictactoe'>TicTacToe</div>
          </Link>
          <Link to='/games/etchsketch'  className='rpscolor'>
            <div className='etchsketch'>Etch-A-sketch</div> */}
          {/* </Link> */}
        
      </div>
    </div>
  );
};
export default Games;
