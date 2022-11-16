
import { motion } from 'framer-motion';
// import { HelmetProvider, Helmet } from "react-helmet-async";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='home'
    >
      {/* <HelmetProvider>
      <Helmet>
        <title>TrackerLux| Home</title>
      </Helmet>
    </HelmetProvider> */}
      <h1 style={{ color: 'green', margin: '6rem auto', textAlign: 'center' }}>
     Scholar Sheep
      </h1>
      <div className='home-header'>
        <p>About Page</p>
      </div>
    </motion.div>
  );
};

export default About;