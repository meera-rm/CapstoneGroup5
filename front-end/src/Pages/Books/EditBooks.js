import UpdateBooks from '../../Components/edit/UpdateBooks';
import { motion } from 'framer-motion';

const EditBooks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ textAlign: 'center' }}>Edit Book Info</h2>
      <UpdateBooks />
    </motion.div>
  );
};

export default EditBooks;
