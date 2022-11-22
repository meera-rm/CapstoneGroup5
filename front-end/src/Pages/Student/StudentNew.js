import NewStudents from '../../Components/new/NewStudents';

import { HelmetProvider, Helmet } from 'react-helmet-async';
const StudentNew = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep | Student  | New</title>
        </Helmet>
      </HelmetProvider>
      <h2 className='text-center  mt-4'>New Student</h2>
      <NewStudents />
    </div>
  );
};

export default StudentNew;
