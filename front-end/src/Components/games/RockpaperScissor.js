import {useState} from 'react';

const RockpaperScissors=()=>{

   const [userChoice, setUserChoice]=useState(null);
   const [computerChoice, setComputerChoice]=useState(null);
   const [wins,setWins]=useState(0);
   const [loss,setLoss]=useState(0);
   const [game, setGame] = useState(null);
   const selection = ['rock','scissors','paper','spock','lizard'];

    return(
        <section className='grid grid-cols-1 space-evenly md:grid-cols-2 '>
           <h2> ROCK PAPER SCISSORS</h2>
           <div className=''>
           
            <div className='border-2 border-indigo-400'>
                {/* //display the result of selection */}
             </div>
            <div>
                  {/* //display the result of computer selection */}
            </div>
           </div>
        </section>
    )
}
export default RockpaperScissors;
// https://jamescole.info/design/drum-machine/
// https://github.com/jamescoledesign/drum-machine-v2/blob/main/src/components/Pad.js/
{/* <a target="_blank" href="https://icons8.com/icon/Y6pT2xNwvXY7/brick">Brick</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}




// websites fo rui design

// https://stackblitz.com/edit/react-rock-paper-scissors?file=src%2FApp.
//https://github.com/Pavan-Kiran-Chidirala/reactrpsappjs/blob/main/src/components/RpsPage/index.js
//https://aviyel.com/post/1203/building-a-rock-paper-scissor-lizard-and-spoke-game-in-react
//https://rock-paper-scissor-spock-game.netlify.app/