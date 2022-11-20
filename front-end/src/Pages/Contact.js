import { motion } from 'framer-motion';
import ContactPage from '../Components/common/ContactPage';
function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='home'>
      {/* <HelmetProvider>
    <Helmet>
      <title>Scholar Sheep| Home</title>
    </Helmet>
  </HelmetProvider> */}
      <h1 style={{ color: 'green', margin: '6rem auto', textAlign: 'center' }}>
        Scholar Sheep
      </h1>
      <div className='home-header'>
        <ContactPage />
      </div>
    </motion.div>
  );
}

export default Contact;
