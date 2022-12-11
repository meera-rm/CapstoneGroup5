import NewComments from '../../Components/new/NewComments';

import { HelmetProvider, Helmet } from 'react-helmet-async';
const NewComment = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep | Comments | New</title>
        </Helmet>
      </HelmetProvider>
      <h2 className='text-center mt-4'>New Comment</h2>
      <NewComments />
    </div>
  );
};

export default NewComment;
