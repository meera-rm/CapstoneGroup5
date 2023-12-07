import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import httpService from '../httpService';
import axios from 'axios';
import Pagination from '../features/Pagination';
import LogEntry from './LogEntry';
import Modal from '../features/Modal';

// import StudentLogsView from './StudentLogsView';
// import NewLogs from '../new/NewLogs';
// import Comment from './Comment';
// import NewComments from '../new/NewComments';
// import { MdDelete } from 'react-icons/md';
// import { MdTableView } from 'react-icons/md';
// import { FaEdit } from 'react-icons/fa';

const API = process.env.REACT_APP_API_URL;

const StudentDetails = (props) => {
  const [student, setStudent] = useState([]);
  const [logData, setLogData] = useState([]);
  // const [comment, setComment] = useState([]);
  const [choice] = useState(2);
  //Popup code
  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();
  let { id } = useParams();
  const location = useLocation();
  const fromTeacherDetails = location.state?.fromTeacherDetails;

  useEffect(() => {
    // httpService
    axios
      .get(`${API}/api/students/${id}`)
      .then((response) => {
        setStudent(response.data);
        // console.log(response.data);
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate]);

  useEffect(() => {
    // httpService
    axios
      .get(`${API}/api/students/${id}/logs`)
      .then((response) => {
        // console.log(response.data);
        setLogData(response.data);
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate]);

  //Delete functions
  const handleDelete = () => {
    //  httpService
    axios
      .delete(`${API}/api/students/${id}`)
      .then(() => {
        navigate('/students');
      })
      .catch((e) => console.error(e));
  };

  const [currentPage, setCurrentPage] = useState(1);

  const [logsPerPage] = useState(6);

  const indexOfLastRecord = currentPage * logsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - logsPerPage;
  const currentRecords = logData.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(logData.length / logsPerPage);

  const [message, setMessage] = useState(true);

  const onClick = () => setMessage(false);

  // const [filters, setFilters] = useState({})
  // const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })

  // const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
  // const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])

  return (
    //   <div className='container mx-auto px-4 sm:px-8'>
    // <div>
    //   <h2 className="font-bold mt-10 mb-5 text-center text-teal-600 text-5xl'">
    //     Student Dashboard
    //   </h2>
    // </div>
    <div className='md:container md:mx-auto px-4 sm:px-8'>
      <div>
        <h2 className='flex justify-center items-center font-bold mt-10 mb-20 text-teal-600 text-3xl'>
          Student Dashboard
        </h2>
      </div>

      <div className='block text-left mt-15 md:w-1/2 md:mx-auto '>
        <div className='font-bold'>
          Student Name:{'   '}
          <span className='font-semibold'>{student.student_name}</span>
        </div>
        <div className='font-bold'>
          Student Grade:
          <span className='font-semibold'>{student.grade}</span>
        </div>
        <div className='font-bold'>
          Parent Email:{' '}
          <span className='font-semibold'>{student.parent_email}</span>
        </div>
        <div className='font-bold'>
          Teacher Id:{' '}
          <span className='font-semibold'>{student.teachers_id}</span>
        </div>
      </div>

      {/* <div className='py-8'>
    <div className='sm:block mt-10 md:flex md:justify-center md:ml-6 md:space-x-6'> */}
      <div className='py-8'>
        <div className='mt-10 flex md:justify-center ml-6 space-x-6'>
          <button
            className='bg-indigo-500 text-center px-6 py-4 text-white rounded hover:bg-indigo-400'
            onClick={() => setShowModal(true)}
          >
            Add Logs
          </button>

          <Link to={`/students`}>
            <button className='bg-indigo-500 text-center px-6 py-4 text-white rounded hover:bg-indigo-400 '>
              Back
            </button>
          </Link>
        </div>

        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            choice={choice}
            student={student}
          />
        )}

        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow-md rounded-lg'>
            <div className='table-wrp block min-h-96 overflow-x-auto'>
              <table className='w-full'>
                {/* Table Headers... */}
                <thead>
                  <tr>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Id
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Student Name
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Book Title
                    </th>

                    {/* <th className=' px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                     Book Id
                    </th> */}

                    <th className=' px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Minutes Read
                    </th>
                    <th className=' px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Pages Read
                    </th>
                    <th className=' px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Reading Inference
                    </th>
                    <th className=' px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Comments
                    </th>
                  </tr>
                </thead>
                <tbody className='h-96 overflow-y-auto'>
                  {currentRecords.map((log, index) => {
                    return <LogEntry log={log} index={index} key={index} />;
                  })}
                </tbody>
              </table>
              <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
