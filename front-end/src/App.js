// COMPONENTS

import NavBar from './Components/common/nav';

import Footer from './Components/common/Footer';

import AnimatedRoutes from './Components/common/AnimatedRoutes';

const App = () => {
  return (
    <div className='App'>
      <main>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </main>
    </div>
  );
};

export default App;
