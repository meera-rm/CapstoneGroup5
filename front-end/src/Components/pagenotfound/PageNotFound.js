import { Link } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PageNotFound = () => {
  const [show, setShow] = useState(false);

  const handleClose = (fromModal) => setShow(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
      {show ? (
        <div>
          <Modal
            show={show}
            onHide={() => handleClose({ msg: 'Cross Icon Clicked!' })}
          >
            <Modal.Header closeButton></Modal.Header>

            <Modal.Body>
              <div className='text-center flex justify-center items-center'>
                <h1 className='text-red-400 text-center text-sm '>404</h1>
                <h3>Sorry ,We could not find the Page</h3>
                <p className='text-base'>
                  <Link style={{ color: 'black' }} to='/'>
                    Go Home
                  </Link>
                </p>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant='danger'
                onClick={() => handleClose({ msg: 'Modal Closed!' })}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : null}
    </div>
  );
};
export default PageNotFound;
