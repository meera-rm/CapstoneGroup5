import React, { useEffect, useState } from 'react';
import './MyTimer.css';

const MyTimer = () => {
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [sessionLength, setSessionLength] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [activePhase, setActivePhase] = useState('session');
  const [playAudio, setPlayAudio] = useState(false);

  let sessionNumber = 0;

  const handleIncrement = (e) => {
    e.preventDefault();
    const title = e.currentTarget.title;
    // const id = e.target.id;

    if (title === 'session' && sessionLength <= 60) {
      setSessionLength((sessionLength) => sessionLength + 1);
      setTimeLeft(timeLeft + 60);
    } else if (title === 'shortbreak' && shortBreak <= 60)
      setShortBreak((shortBreak) => shortBreak + 1);
    else if (title === 'longbreak' && longBreak <= 60)
      setLongBreak((longBreak) => longBreak + 1);
    if (sessionLength >= 60) setSessionLength(25);
    if (shortBreak >= 60) setShortBreak(5);
    if (longBreak >= 60) setShortBreak(15);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    const title = e.currentTarget.title;
    // const id = e.target.id;

    if (title === 'session' && sessionLength > 1) {
      setSessionLength((sessionLength) => sessionLength - 1);
      setTimeLeft(timeLeft - 60);
    } else if (title === 'shortbreak' && shortBreak > 0)
      setShortBreak((shortBreak) => shortBreak - 1);
    else if (title === 'longbreak' && longBreak > 0)
      setLongBreak((LongBreak) => LongBreak - 1);

    if (sessionLength <= 1) setSessionLength(25);
    if (shortBreak <= 1) setShortBreak(5);
    if (longBreak <= 1) setLongBreak(15);
  };

  useEffect(() => {
    const audio = document.getElementById('beep');
    if (timeLeft === 0) {
      if (activePhase === 'session') {
        sessionNumber++;
        if (sessionNumber % 2 !== 0) {
          setActivePhase('shortbreak');
          setTimeLeft(shortBreak * 60);
        } else if (sessionNumber % 2 === 0) {
          setActivePhase('longbreak');
          setTimeLeft(longBreak * 60);
        }
      } else {
        setActivePhase('session');
        setIsPlaying(false);
        setTimeLeft(sessionLength * 60);
      }
      audio.play();

      // if (shortBreak > 0) {
      //   setActivePhase("shortbreak");
      //   setTimeLeft(shortBreak * 60);
      // } else if (longBreak > 0) {
      //   setActivePhase("longbreak");
      //   setTimeLeft(longBreak * 60);
      // } else {
      //   setActivePhase("session");
      //   setIsPlaying(false);
      // }
    } else if (activePhase === 'shortbreak') {
      // if (longBreak > 0) {
      //   setActivePhase("longbreak");
      //   setTimeLeft(longBreak * 60);
      // } else {
      setActivePhase('session');
      setIsPlaying(false);
      audio.pause();
      audio.currentTime = 0;
      // }
    } else if (activePhase === 'longbreak') {
      setActivePhase('session');
      setIsPlaying(false);
      audio.pause();
      audio.currentTime = 0;
    }
  }, [timeLeft]);

  const handleReset = () => {
    setIsPlaying(false);
    setSessionLength(25);
    setActivePhase('session');
    setShortBreak(5);
    setLongBreak(15);
    setTimeLeft(25 * 60);
    setPlayAudio(false);
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying && playAudio) {
      intervalId = setInterval(function () {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      clearInterval(intervalId);
    }
  }, [isPlaying]);

  const handleStartStop = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setTimeLeft(timeLeft);
    } else {
      setIsPlaying(false);
    }
    setPlayAudio(!playAudio);
  };

  return (
    <div className='timerContainer'>
      <h1 className='timerHeader text-center mt-10 mb-5 text-3xl font-bold text-teal-600'>
        Pomodoro Clock
      </h1>
      <div className='timerTitle'>
        <div className='break-label text-xl font-bold text-teal-600'>
          {' '}
          Short Break{' '}
        </div>
        <div className='session-label text-xl font-bold text-teal-600'>
          Long Break
        </div>
        <div className='session-label text-xl font-bold text-teal-600'>
          Session Length
        </div>
      </div>
      <div className='timerWrapper'>
        <div className='shortbreak'>
          <button
           className='text-xl font-bold text-teal-600  border-2 border-teal-600 pl-2 pr-2'
            title='shortbreak'
            id='shortbreak-increment'
            onClick={handleIncrement}
          >
            +
          </button>

          <div className='shortbreak-length text-xl font-bold text-teal-600'>
            {shortBreak}
          </div>

          <button
           className='text-xl font-bold text-teal-600 border-2 border-teal-600 pl-2 pr-2'
            type='button'
            title='shortbreak'
            id='shortbreak-decrement'
            onClick={handleDecrement}
          >
            -
          </button>
        </div>

        <div className='longbreak'>
          <button
           className='text-xl font-bold text-teal-600 border-2 border-teal-600 pl-2 pr-2'
            type='button'
            title='longbreak'
            id='longbreak-increment'
            onClick={handleIncrement}
          >
            +
          </button>

          <div className='longbreak-length text-xl font-bold text-teal-600'>
            {longBreak}
          </div>

          <button
           className='text-xl font-bold text-teal-600 border-2 border-teal-600 pl-2 pr-2'
            type='button'
            title='longbreak'
            id='longbreak-decrement'
            onClick={handleDecrement}
          >
            -
          </button>
        </div>

        <div className='session'>
          <button
           className='text-xl font-bold text-teal-600 border-2 border-teal-600 pl-2 pr-2'
            type='button'
            title='session'
            id='session-increment'
            onClick={handleIncrement}
          >
            +
          </button>

          <div className='session-length text-xl font-bold text-teal-600 border-2 border-teal-600 pl-2 pr-2'>
            {sessionLength}
          </div>

          <button
           className='text-xl font-bold text-teal-600 border-2 border-teal-600 pl-2 pr-2'
            type='button'
            title='session'
            id='session-decrement'
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>

      <div className='timer'>
        <div className='timer-label text-xl font-bold text-teal-600'>
          {activePhase} Length
        </div>

        <div className='timer-left text-xl font-bold text-teal-600'>
          <span>
            {Math.floor(timeLeft / 60).toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          <span>:</span>
          <span>
            {(timeLeft % 60).toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
        </div>
        <div className='startStopButtons'>
          <button
            className=' text-xl font-bold text-teal-600 border-2 border-teal-600 pl-2 pr-2'
            onClick={handleStartStop}
          >
            {isPlaying ? 'Stop' : 'Start'}
          </button>

          <button
            className=' text-xl font-bold text-teal-600 border-2 border-teal-600 pl-2 pr-2'
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        
      </div>
      <audio
        id='beep'
        preload='auto'
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
      />
    </div>
  );
};

export default MyTimer;
