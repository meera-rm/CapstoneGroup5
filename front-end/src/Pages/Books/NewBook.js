import NewBooks from '../../Components/new/NewBooks';

import { HelmetProvider, Helmet } from 'react-helmet-async';
const NewBook = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep | Books | New</title>
        </Helmet>
      </HelmetProvider>
      <h2 className='text-center mt-4'>New Book</h2>
      <NewBooks />
    </div>
  );
};

export default NewBook;
