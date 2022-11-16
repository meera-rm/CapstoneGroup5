// import AllStudents from '../../Components/index/AllStudents';
import {motion} from 'framer-motion'

const StudentIndex = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  
    className='Index' >
      
      {/* <AllStudents /> */}
    </motion.div>
  );
};

export default StudentIndex;
