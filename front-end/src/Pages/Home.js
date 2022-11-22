import './Home.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
// import { HelmetProvider, Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='home' >
      {/* <HelmetProvider>
      <Helmet>
        <title>TrackerLux| Home</title>
      </Helmet>
    </HelmetProvider> */}
      <h1 style={{ color: 'teal', margin: '6rem auto',textAlign: 'center' }}>
      Welcome to Scholar Sheep
      </h1>
      <div className='home-header'>
      <Link to="/teacher-login"> <button className="home-button">Teacher Login</button></Link> &nbsp; <Link to="/teacher-signup"> <button className="home-button">Teacher Sign Up</button></Link>
      <br></br>
      <Link to="/parent-login"><button className="home-button">Parent Login</button></Link> &nbsp; <Link to="/parent-signup"><button className="home-button">Parent Sign Up</button></Link> 
        <br></br>
        <div className="flexing">
      <img src="https://img.freepik.com/premium-vector/child-boy-mother-read-book-learn-lesson-mom-help-kid-home-school-online-education_352905-268.jpg?w=2000" alt="" />
      </div>
      <div className="flexing">
       <p>The average American has a reading level equivalent to a seventh or eight grade child. During the pandemic children's reading scores fell across the nation. Scholar Sheep hopes to improve the reading skills and ignite the passion for reading in today's children.</p>

       <p> We at Scholar Sheep want to get parents involved with their children's education. It has been proven that children perform better when parents take an active role. We are bridging the gap between parent child relationships.</p>
       </div>
      </div>
    </motion.div>
  );
};

export default Home;
