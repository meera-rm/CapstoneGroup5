import './Home.css';
import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import homepic from '../Components/asset/boyandmother.webp';
import aboutpic from '../Components/asset/studentstable.jpeg';
import Carousel from './Carousel';
import ScrollToTop from "./ScrollToTop";
const Home = () => {
  // const TailwindCSSButton =(props)=>{
  //   return(
  //     <button className='bg-teal-600 text-black font-medium px-4 py-2 rounded hover:bg-teal-500 inline-block'> {props.children}</button>
  //   )
  // }

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep| Home</title>
        </Helmet>
      </HelmetProvider>

      <div className='text-center'>
        <p className='text-center text-5xl z-20 font-bold font-mono text-teal-700 '>
          Welcome to Scholar Sheep
        </p>

        <div className='flex justify-center items-center'>
          {/* <div className=' grid  place-items-center'> */}
          <Carousel />
        </div>

        <div className='mt-10 max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
          <div className='md:flex'>
            <div className=' md:shrink-0'>
              <img
                className='h-96 w-full object-cover md:h-full md:w-80'
                src={homepic}
                alt='Modern building architecture'
              />
             
            </div>
            <div className='p-8'>
              <p className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
                Cultivating reading habits among children{' '}
              </p>

              <p className='mt-2 text-slate-500'>
                The average American has a reading level equivalent to a seventh
                or eight grade child. During the pandemic children's reading
                scores fell across the nation. Scholar Sheep hopes to improve
                the reading and ignite the passion for reading in today's
                children.
              </p>
              {/* <p className='mt-2 text-slate-500'>
                {' '}
                We at Scholar Sheep want to get parents involved with their
                children's education. It has been proven that children perform
                better when parents take an active role. We are bridging the gap
                between parent child relationships.
              </p> */}
            </div>
          </div>
          <div className='md:flex'>
            <div className=' md:shrink-0'>
              <img
                className='h-96 w-full object-cover md:h-full md:w-80'
                src={aboutpic}
                alt='Modern building architecture'
              />
             
            </div>
            <div className='p-8'>
             

              <p className='mt-2 text-slate-500'>
              {/* Welcome to ScholarSheep, the one and only app for teachers and
            parents to keep track of students' daily reading tasks. Our app
            incorporates a parent view and teacher view with the ability to log
            in for each view. Under the parent view, children can log their
            daily reading pages of the assigned reading. Under the teacher view,
            teachers can manage the reading list for their class, and keep track
            of each students progress.. */}
               We at Scholar Sheep want to get parents involved with their
                children's education. It has been proven that children perform
                better when parents take an active role. We are bridging the gap
                between parent child relationships.
              </p>
              
            </div>
          </div>
          {/*  </div>
         <TailwindCSSButton>TailwindCSS</TailwindCSSButton> 
         </div>*/}
        </div>
      </div>
     <ScrollToTop/>
    </div>
  );
};

export default Home;
