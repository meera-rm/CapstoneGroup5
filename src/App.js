// COMPONENTS
import './App.css';
import React,{useState, useEffect} from 'react';
import NavBar from './Components/common/nav';
import Footer from './Components/common/Footer';
import AnimatedRoutes from './Components/common/AnimatedRoutes';

// import useLocalStorage from 'use-local-storage';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';

const App = () => {
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage(
  //   'theme',
  //   defaultDark ? 'dark' : 'light'
  // );
  // // const [theme, setTheme] = useState(null)

  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  // };

  const [mode, setMode] = useState('light'); // Default mode is light


  useEffect(() => {
    // Load user's preferred mode from storage
    const preferredMode = localStorage.getItem('preferredMode');
    if (preferredMode) {
      setMode(preferredMode);
    }
  }, []);

  useEffect(() => {
    // Apply the current mode to the whole document
    document.documentElement.setAttribute('data-theme', mode);
    // Save mode preference to storage
    localStorage.setItem('preferredMode', mode);
  }, [mode]);
  

  const switchMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };
  let darkModeButton = (
      <button className='switchThemeButton' onClick={switchMode}>
        {mode === 'light' ? (
         <BsFillSunFill size={30} />

        ) : (
          <BsFillMoonFill size={30} />
        )}
        </button>
   );
   
  // dark mode button - passing in as a prop to nav.js
  // let darkModeButton = (
  //   <button className='switchThemeButton' onClick={switchTheme}>
  //     {theme === 'light' ? (
  //       <BsFillSunFill size={30} />
  //     ) : (
  //       <BsFillMoonFill size={30} />
  //     )}
  //   </button>
  // );
  return (
    <div className='App' >
      {/* data-theme={theme} */}
      <main>
        <NavBar darkModeButton={darkModeButton} mode={mode} />
        <AnimatedRoutes />
        <Footer />
      </main>
    </div>
  );
};

export default App;

