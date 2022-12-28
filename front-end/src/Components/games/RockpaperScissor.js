import {useState} from 'react';

const RockpaperScissors=()=>{

   const [userChoice, setUserChoice]=useState(null);
   const [computerChoice, setComputerChoice]=useState(null);
   const [wins,setWins]=useState(0);
   const [loss,setLoss]=useState(0);
   const [game, setGame] = useState(null);
   const selection = ["🧱", "📰", "✂️"];

    return(
        <div className='grid grid-cols-1 space-evenly md:grid-cols-2 '>
            <p>Wins</p>
            <p>Loss</p>
        </div>
    )
}
export default RockpaperScissors;
// https://jamescole.info/design/drum-machine/
// https://github.com/jamescoledesign/drum-machine-v2/blob/main/src/components/Pad.js/