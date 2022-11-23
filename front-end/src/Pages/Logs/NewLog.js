import NewLogs from '../../Components/new/NewLogs';

import { HelmetProvider, Helmet } from 'react-helmet-async';

const NewLog = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Scholar Sheep | Logs | New</title>
        </Helmet>
      </HelmetProvider>
      <h2 className='text-center  mt-4'>New Logs</h2>
      <NewLogs />
    </div>
  );
};

export default NewLog;
