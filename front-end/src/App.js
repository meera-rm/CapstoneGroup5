// COMPONENTS
import './App.css';
import NavBar from './Components/common/nav';
import Footer from './Components/common/Footer';
import AnimatedRoutes from './Components/common/AnimatedRoutes';

import useLocalStorage from 'use-local-storage';
import { BsFillMoonFill } from 'react-icons/bs';

import { BsFillSunFill } from 'react-icons/bs';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // dark mode button - passing in as a prop to nav.js
  let darkModeButton = (
    <button className='switchThemeButton' onClick={switchTheme}>
      {theme === 'light' ? (
        <BsFillSunFill size={30} />
      ) : (
        <BsFillMoonFill size={30} />
      )}
    </button>
  );
  return (
    <div className='App' data-theme={theme}>
      <main>
        <NavBar darkModeButton={darkModeButton} />
        <AnimatedRoutes />
        <Footer />
      </main>
    </div>
  );
};

export default App;
