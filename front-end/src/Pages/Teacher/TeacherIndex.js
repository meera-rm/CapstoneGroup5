// import AllTeachers from '../../Components/index/AllTeachers';
import { motion } from 'framer-motion';

const TeacherIndex = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='Index' >
      {/* <AllTeachers /> */}
    </motion.div>
  );
};

export default TeacherIndex;
