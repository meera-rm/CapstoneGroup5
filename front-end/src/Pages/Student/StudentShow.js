import StudentDetails from '../../Components/show/StudentDetails';


import { HelmetProvider, Helmet } from 'react-helmet-async';
const StudentShow = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep | Student  | Show</title>
        </Helmet>
      </HelmetProvider>
      <StudentDetails />
    </div>
  );
};

export default StudentShow;
