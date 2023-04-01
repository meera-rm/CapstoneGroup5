import './Home.css';
import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
const SignUp = () => {

    return(
        <div><HelmetProvider>
        <Helmet>
          <title>Scholar Sheep| Home</title>
        </Helmet>
      </HelmetProvider>
        {/* <div className='text-center mt-32'> */}
        
        <div className=' mt-40 flex justify-center ml-6 space-x-6 '>
         <div className='mb-4 mt-10  space-y-12'>
         <div className='bg-teal-500 px-6 py-4  rounded text-white'>
        <Link to="/Signup/teacher-signup"> <button className="home-button">Teacher Sign Up</button></Link>
        </div>
        <div className='bg-teal-500 px-6 py-4  rounded text-white'>
        <Link to="/login/teacher-login"> 
        <button className="home-button">Teacher Login</button></Link> 
        </div>
       </div>
       
        <div className='mb-4 mt-10  space-y-12'>
        <div className='bg-teal-500 px-6 py-4 rounded text-white'>
         <Link to="/Signup/parent-signup"><button className="home-button">Parent Sign Up</button></Link> 
         </div>
        <div className='bg-teal-500 px-6 py-4 rounded text-white'>
        <Link to="/login/parent-login"><button className="home-button">Parent Login</button></Link>
        </div>
       
        </div>
        </div>
        </div>
      
    )
}
export default SignUp;