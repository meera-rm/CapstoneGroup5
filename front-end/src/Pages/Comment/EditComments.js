import UpdateComments from '../../Components/edit/UpdateComments';

import { HelmetProvider, Helmet } from 'react-helmet-async';
const EditComments = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep | Comments | Edit</title>
        </Helmet>
      </HelmetProvider>
      <h2 className='text-center mt-4'>Edit Comments</h2>
      <UpdateComments />
    </div>
  );
};

export default EditComments;
