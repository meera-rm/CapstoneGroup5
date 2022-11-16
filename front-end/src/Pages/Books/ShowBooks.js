import BookDetails from '../../Components/show/BookDetails';
import { motion } from "framer-motion"
import './ShowBooks.css';

const ShowBooks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BookDetails />
    </motion.div>
  );
};

export default ShowBooks;
