import './Home.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
    
      <h1 className='text-3xl m-12 text-center font-bold font-mono text-green-600/100'>
       
        Welcome to Scholar Sheep
      </h1>
      <div className='text-center'>
        {/* <p>
          {' '}
          Analyzing the characters and emotions through the eyes of the author
        </p> */}
       <div className='home-header'> 
        <button className='home-button'>Teacher Login</button> &nbsp;{' '}
        <Link to='/teacher-signup'>
          {' '}
          <button className='home-button'>Teacher Sign Up</button>
        </Link>
        <br></br>
        <button className='home-button'>Parent Login</button> &nbsp;{' '}
        <button className='home-button'>Parent Sign Up</button>
        <br></br>
        <div className='flexing'>
          <img
            src='https://img.freepik.com/premium-vector/child-boy-mother-read-book-learn-lesson-mom-help-kid-home-school-online-education_352905-268.jpg?w=2000'
            alt=''
          />
        </div>
        <div className='flexing'>
          <p>
            The average American has a reading level equivalent to a seventh or
            eight grade child. During the pandemic children's reading scores
            fell across the nation. Scholar Sheep hopes to improve the reading
            skills and ignite the passion for reading in today's children.
          </p>

          <p>
            {' '}
            We at Scholar Sheep want to get parents involved with their
            children's education. It has been proven that children perform
            better when parents take an active role. We are bridging the gap
            between parent child relationships.
          </p>
        </div>
        </div>
        {/* <TailwindCSSButton>TailwindCSS</TailwindCSSButton> */}
      </div>

      {/* </div> */}
    </div>
  );
};


