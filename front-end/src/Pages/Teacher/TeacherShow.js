import TeacherDetails from '../../Components/show/TeacherDetails';
import { HelmetProvider, Helmet } from 'react-helmet-async';
const TeacherShow = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep | Teacher | Show</title>
        </Helmet>
      </HelmetProvider>
      <TeacherDetails />
    </div>
  );
};

export default TeacherShow;
