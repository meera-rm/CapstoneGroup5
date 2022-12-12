
import StudentLogsView from '../../Components/show/StudentLogsView';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const StudentView = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep | Student | Edit</title>
        </Helmet>
      </HelmetProvider>
      <h2 className='text-center  mt-4'>Edit</h2>
      <StudentLogsView />
    </div>
  );
};

export default StudentView;