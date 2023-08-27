
import React,{useEffect,useState} from 'react';

 const Timer=() =>{


  const [countDown, setCountDown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [readingTime, setReadingTime] = useState(25);
  const [screenBreak, setScreenBreak] = useState(0);
  const [snackBreak, setSnackBreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [activePhase, setActivePhase] = useState("reading");

  useEffect(() => {
    if (countDown) {
      const intervalId = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [countDown]);

  useEffect(() => {
    if (timeLeft === 0) {
      if (activePhase === "reading") {
        if (screenBreak > 0) {
          setActivePhase("screen");
          setTimeLeft(screenBreak * 60);
        } else if (snackBreak > 0) {
          setActivePhase("snack");
          setTimeLeft(snackBreak * 60);
        } else {
          setActivePhase("reading");
          setIsPlaying(false);
        }
      } else if (activePhase === "screen") {
        if (snackBreak > 0) {
          setActivePhase("snack");
          setTimeLeft(snackBreak * 60);
        } else {
          setActivePhase("reading");
          setIsPlaying(false);
        }
      } else if (activePhase === "snack") {
        setActivePhase("reading");
        setIsPlaying(false);
      }
    }
  }, [timeLeft]);

  const handleToggle = () => {
    setCountDown((countDown) => !countDown);
    if (!countDown) {
      setTimeLeft(readingTime * 60);
      setIsPlaying(true);
      setActivePhase("reading");
    } else {
      setIsPlaying(false);
    }
  };

  // const handlePlayPause = () => {
  //   if (isPlaying) {
  //     setIsPlaying(false);
  //     setCountDown(false);
  //   } else {
  //     setIsPlaying(true);
  //     setCountDown(true);
  //   }
  // };

  const handleReset = () => {
    setIsPlaying(false);
    setCountDown(false);
    setSnackBreak(0);
    setScreenBreak(0);
    setReadingTime(25);
    setTimeLeft(0);
  };

  const handleIncrement = (e) => {
    const title = e.currentTarget.title;
    if (title === "reading") {
      setReadingTime((readingTime) => readingTime + 1);
    } else if (title === "screen" && screenBreak < 10) {
      setScreenBreak((screenBreak) => screenBreak + 1);
    } else if (title === "snack" && snackBreak < 15) {
      setSnackBreak((snackBreak) => snackBreak + 1);
    }
  };

  const handleDecrement = (e) => {
    const title = e.currentTarget.title;
    if (title === "reading" && readingTime > 25) {
      setReadingTime((readingTime) => readingTime - 1);
    } else if (title === "screen" && screenBreak > 0) {
      setScreenBreak((screenBreak) => screenBreak - 1);
    } else if (title === "snack" && snackBreak > 0) {
      setSnackBreak((snackBreak) => snackBreak - 1);
    }
  };

  return (
    <div>
   
     <div className="timerHeader">
       <h1>Pomodoro Timer</h1>
     </div>
     <div className="timer-container">
     <div className={`timer ${activePhase}`}>
       <div className="time-left">
         <span>{Math.floor(timeLeft / 60).toLocaleString("en-US", {
           minimumIntegerDigits: 2,
           useGrouping: false,
         })}</span>
         <span>:</span>
         <span>{(timeLeft % 60).toLocaleString("en-US", {
           minimumIntegerDigits: 2,
           useGrouping: false,
         })}</span>
       </div>
       <div className="timer-phase">{activePhase.toUpperCase()}</div>
     </div>
   </div>
     <div className="controls">
     <button onClick={handleToggle}>{countDown ? "Stop" : "Start"}</button>
   {/* <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button> */}
    <button onClick={handleReset}>Reset</button>
   </div> 
   
     <div className="settings">
    <div className="setting">
      <div className="setting-label">Reading Time</div>
      <div className="setting-controls">
        <button title="reading" onClick={handleIncrement}>
    +
        </button>
        <div>{readingTime}</div>
        <button title="reading" onClick={handleDecrement}>
{/*           <i className="fas fa-minus"></i> */}-
        </button>
      </div>
    </div>
     <div className="setting">
       <div className="setting-label">Screen Break</div>
       <div className="setting-controls">
         <button title="screen" onClick={handleIncrement}>
           +
         </button>
         <div>{screenBreak}</div>
         <button title="screen" onClick={handleDecrement}>
          -
         </button>
       </div>
     </div>
     <div className="setting">
      <div className="setting-label">Snack Break</div>
       <div className="setting-controls">
         <button title="snack" onClick={handleIncrement}>
           +
         </button>
         <div>{snackBreak}</div>
         <button title="snack" onClick={handleDecrement}>
           -
         </button>
       </div>
     </div>
  </div>
    </div>
   
  )
}
export default Timer;



// https://www.google.com/search?rlz=1C5CHFA_enUS1000US1001&tbm=vid&q=notification+in+react&sa=X&ved=2ahUKEwjdv9qLtIn-AhXVF1kFHRMZBZYQ8ccDegQIVxAJ&biw=1434&bih=764&dpr=2