import {React, useState, useEffect} from 'react';

const RockpaperScissors=()=>{

   const [userChoice, setUserChoice]=useState(null);
   const [computerChoice, setComputerChoice]=useState(null);
   const [wins,setWins]=useState(0);
   const [loss,setLoss]=useState(0);
   const [game, setGame] = useState(0);
   const [finalOutput, setFinalOutput]=useState('')
  

   const options = ['📜','🖖','🧱','🦎','✂️'];
   
   const clickHandler = (option) => {
    setUserChoice(option);
    setComputerChoice(options[Math.floor(Math.random() * options.length)]);
  };
  const play=()=>{
    console.log('play')
    setComputerChoice(null)
    setUserChoice(null)
    setFinalOutput('')
    setWins(0);
    setLoss(0);
   }
 
    
    useEffect(() => {
        
          switch (userChoice + computerChoice) {
            case "✂️📜":
            case "🧱✂️":
            case "📜🧱":
            case "🦎📜":
            case "🖖✂️":
            case "🧱🦎":
            case "📜🖖":
            case "🖖🧱":
            case "✂️🦎":
            case "🦎🖖":
              setFinalOutput("YOU WON! 🎉");
              setWins(wins+1);
              break;
            case "📜✂️":
            case "✂️🧱":
            case "🧱📜":
            case "📜🦎":
            case "✂️🖖":
            case "🦎🧱":
            case "🖖📜":
            case "🧱🖖":
            case "🦎✂️":
            case "🖖🦎":
              setFinalOutput("YOU LOSE! 👎 ");
              setLoss(loss+1);
              break;
            case "🧱🧱":
            case "📰📰":
            case "✂️✂️":
            case "🦎🦎":
            case "🖖🖖":
              setFinalOutput("ITS A DRAW! 💥 ");
              setLoss(loss+0);
              setWins(wins+0);
              break;
            default:
                break;
          }
          

      }, [computerChoice, userChoice]);
 
      
   
    return(
        <div className='text-center bg-teal-100 min-h-max'>
       
           <h1 className='pt-10 pb-10'> ROCK PAPER SCISSORS</h1>
          
           <div className='flex justify-around align-center '>
             <h2 className='text-xl'>Wins: {wins}</h2>
             <h2 className='text-xl'>Loss: {loss}</h2>
           </div>
           <div>{finalOutput}</div>
           {/* {game >5 ? reset(): ''}
           <div> Games Left :{5-game} </div> */}
           <section className='flex justify-around align-center pt-5 pb-5 '>
            <div className='block border-2 border-teal-500 p-10  '>
               
                <h2 className='py-10 text-xl'>Your choice:<span className='px-5'></span> </h2>
                <h2  className='text-5xl'>{userChoice}</h2>
             </div>
            <div className='block border-2 border-teal-500 p-10'>
                 
                  <h2 className='py-10 text-xl'>Computer choice: </h2>
                  <h2 className='text-5xl'> {computerChoice}</h2>
           </div>
           </section>
           <div className='py-10'>
           <button className='border-2 border-teal-500 p-5 w-36 ' onClick={play}>Play Again</button>
           </div>
           <section className='flex inset-y-0 py-5' >
          
           {options.map((option,index) => (
            <button className='pt-10 pb-10 m-auto text-center text-5xl border-2 border-teal-460  bg-teal-500 p-10 rounded-full' key={index} onClick={() => clickHandler(option)}>{option}</button>
          ))} 
           
          </section>
       </div>
    )
}
export default RockpaperScissors;


// https://jamescole.info/design/drum-machine/
// https://github.com/jamescoledesign/drum-machine-v2/blob/main/src/components/Pad.js/




// websites fo rui design

// https://stackblitz.com/edit/react-rock-paper-scissors?file=src%2FApp.
//https://github.com/Pavan-Kiran-Chidirala/reactrpsappjs/blob/main/src/components/RpsPage/index.js
//https://aviyel.com/post/1203/building-a-rock-paper-scissor-lizard-and-spoke-game-in-react
//https://rock-paper-scissor-spock-game.netlify.app/