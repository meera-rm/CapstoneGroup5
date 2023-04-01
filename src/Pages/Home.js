import './Home.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
 
import Carousel from './Carousel';
import ScrollToTop from './ScrollToTop';
import UpcomingBooks from './UpcomingBooks/UpcomingBooks.js';
import SubscriptionForm from './SubscriptionForm/SubscriptionForm';
import Introduction from './Introduction/Introduction';

const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep| Home</title>
        </Helmet>
      </HelmetProvider>

      <div className=' text-center md:'>
        
        <p className='text-center text-5xl font-bold z-20 mt-10 text-teal-600 '>
          Welcome to Scholar Sheep
        </p> 
       
        <div className='flex flex-col md:flex-row justify-around'>
          <div>
            <div className='flex justify-center items-center py-20'>
              <Carousel />
            </div>
            <div className='flex justify-center items-center py-5'>
              <Introduction />
            </div>
          </div>
          <div>
            <div className='flex justify-center items-center'>
              <UpcomingBooks />
            </div>
            <div className='flex justify-center items-center'>
              <SubscriptionForm />
            </div>
          </div>
        </div>
        {/*  </div>
         <TailwindCSSButton>TailwindCSS</TailwindCSSButton> 
         </div>*/}
      </div>

      {/* </div> */}
      <ScrollToTop />
    </div>
  );
};

export default Home;

//PagePals
//Booklings
