import React, { useState, useEffect } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import httpService from '../httpService';
import axios from 'axios';
import Pagination from '../features/Pagination';
import LogEntry from './LogEntry';
import Modal from '../features/Modal';
import { academicYearFor } from '../../utils/academicYear';

// import StudentLogsView from './StudentLogsView';
// import NewLogs from '../new/NewLogs';
// import Comment from './Comment';
// import NewComments from '../new/NewComments';
// import { MdDelete } from 'react-icons/md';
// import { MdTableView } from 'react-icons/md';
// import { FaEdit } from 'react-icons/fa';

const API = import.meta.env.VITE_API_URL;

const StudentDetails = (props) => {
  const { user } = useAuth();
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
  // The school year shown on the page (from ?year=), defaulting to the current year
  const year = new URLSearchParams(location.search).get('year') || academicYearFor();
  const [teacherForYear, setTeacherForYear] = useState(null);

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

  // The teacher this student had in the selected school year
  useEffect(() => {
    axios
      .get(`${API}/api/students/${id}/class?academicYear=${year}`)
      .then((response) => setTeacherForYear(response.data.payload.teacher))
      .catch(() => setTeacherForYear(null));
  }, [id, year]);

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


  return (
   
    <div className='md:container md:mx-auto px-4 sm:px-8'>
      <div className='grid grid-cols-3 items-center mt-10 mb-20 px-4'>
        <div />
        <h2 className='text-center font-bold text-teal-600 text-3xl'>Student Dashboard</h2>
        <div className='flex justify-end'>
          <Link to={user?.user_role === 'teacher' ? '/teacher-dashboard' : '/students'}>
            <button className='bg-indigo-500 px-6 py-3 text-white rounded hover:bg-indigo-400'>
              Back
            </button>
          </Link>
        </div>
      </div>

      <div className='block text-left mt-15 px-4 md:w-1/2 md:mr-auto '>
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
          Student ID:{' '}
          <span className='font-semibold'>{student.student_id}</span>
        </div>
        <div className='font-bold'>
          Student Email:{' '}
          <span className='font-semibold'>{student.student_email}</span>
        </div>
        <div className='font-bold'>
          Class ({year}):{' '}
          <span className='font-semibold'>{teacherForYear ? teacherForYear.class_name : 'Not enrolled this year'}</span>
        </div>
        <div className='font-bold'>
          Teacher Name ({year}):{' '}
          <span className='font-semibold'>{teacherForYear ? teacherForYear.teacher_name : 'Not enrolled this year'}</span>
        </div>
      </div>

  
      <div className='py-8'>
        <div className='mt-10 flex md:justify-center ml-6 space-x-6'>
          {/* Only students add their own logs (on the student dashboard) */}
          {user?.user_role === 'student' && (
            <button
              className='bg-indigo-500 text-center px-6 py-4 text-white rounded hover:bg-indigo-400'
              onClick={() => setShowModal(true)}
            >
              Add Logs
            </button>
          )}
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
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                      Id
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                      Student Name
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-teal-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                      Book Title
                    </th>

                    {/* <th className=' px-5 py-3 border-b-2 border-gray-200 bg-teal-500 text-center text-xs font-semibold text-white uppercase tracking-wider'>
                     Book Id
                    </th> */}

                    <th className=' px-5 py-3 border-b-2 border-gray-200 bg-teal-500 text-center text-xs font-semibold text-white uppercase tracking-wider'>
                      Minutes Read
                    </th>
                    <th className=' px-5 py-3 border-b-2 border-gray-200 bg-teal-500 text-center text-xs font-semibold text-white uppercase tracking-wider'>
                      Pages Read
                    </th>
                    <th className=' px-5 py-3 border-b-2 border-gray-200 bg-teal-500 text-center text-xs font-semibold text-white uppercase tracking-wider'>
                      Reading Inference
                    </th>
                    <th className=' px-5 py-3 border-b-2 border-gray-200 bg-teal-500 text-center text-xs font-semibold text-white uppercase tracking-wider'>
                      Comments
                    </th>
                  </tr>
                </thead>
                <tbody className='h-96 overflow-y-auto'>
                  {currentRecords.map((log, index) => {
                    return <LogEntry log={log} index={index} student={student} />;
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
