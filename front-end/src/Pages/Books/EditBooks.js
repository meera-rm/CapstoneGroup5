import UpdateBooks from '../../Components/edit/UpdateBooks';

import { HelmetProvider, Helmet } from 'react-helmet-async';
const EditBooks = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep | Books | Edit</title>
        </Helmet>
      </HelmetProvider>
      <h2 className='text-center mt-4'>Edit Books</h2>
      <UpdateBooks />
    </div>
  );
};

export default EditBooks;
