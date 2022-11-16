import AllBooks from '../../Components/index/AllBooks';
import {motion} from 'framer-motion'

const IndexBooks = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  
    className='Index'  >
      
      <AllBooks />
    </motion.div>
  );
};

export default IndexBooks;
