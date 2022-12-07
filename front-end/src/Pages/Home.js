import './Home.css';
import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import homepic from '../Components/asset/boyandmother.webp';

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
        <h1 className='text-3xl m-12 text-center font-bold font-mono text-green-600/100'>
          Welcome to Scholar Sheep
        </h1>

        <div className='mt-40 max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
          <div className='md:flex'>
            <div className='md:shrink-0'>
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
              <p className='mt-2 text-slate-500'>
                {' '}
                We at Scholar Sheep want to get parents involved with their
                children's education. It has been proven that children perform
                better when parents take an active role. We are bridging the gap
                between parent child relationships.
              </p>
            </div>
          </div>

          {/* <div className='home-header'> */}

          {/* <Link to="/teacher-login"> <button className="home-button">Teacher Login</button></Link> &nbsp; <Link to="/teacher-signup"> <button className="home-button">Teacher Sign Up</button></Link>
      <br></br>
      <Link to="/parent-login"><button className="home-button">Parent Login</button></Link> &nbsp; <Link to="/parent-signup"><button className="home-button">Parent Sign Up</button></Link> 
      </div> */}

          {/*  </div>
       <TailwindCSSButton>TailwindCSS</TailwindCSSButton> 
      </div>*/}

       
        </div>
      </div>
    </div>
  );
};

export default Home;
