//COMPONENTS
import NavBar from './Components/common/NavBar';
import Footer from './Components/common/Footer';
//import AnimatedRoutes from './Components/common/AnimatedRoutes';

import {Routes, Route} from 'react-router-dom';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div className='App'>
      <main>
        <NavBar />

        <Routes>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

        {/* <AnimatedRoutes /> */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
