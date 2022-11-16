import NewBooks from '../../Components/new/NewBooks';
import { motion } from 'framer-motion';

const NewBook = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <h2 style={{ textAlign: 'center' }}>Add Books</h2>
      <NewBooks />
    </motion.div>
  );
};

export default NewBook;
