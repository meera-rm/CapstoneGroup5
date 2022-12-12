import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Pagination from '../features/Pagination';
import Modal from '../features/Modal';

import { MdDelete } from 'react-icons/md';
import { MdTableView } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import StudentLogsView from './StudentLogsView';
const API = process.env.REACT_APP_API_URL;

const TeacherDetails = () => {
  const [teacher, setTeacher] = useState([]);
  const [student, setStudent] = useState([]);
  const [choice] = useState(1);
  const [bookData, setBookData] = useState([]);
  const [view, setView] = useState(false);

  let navigate = useNavigate();

  let { id } = useParams();

  //Popup code
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/api/teachers/${id}`)
      .then((response) => {
        setTeacher(response.data.payload);
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate, teacher]);

  useEffect(() => {
    axios
      .get(`${API}/api/teachers/${id}/students`)
      .then((response) => {
        // console.log(response.data)
        setStudent(response.data);
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate, student]);

  useEffect(() => {
    axios.get(`${API}/api/books`).then((response) => {
      // console.log(response.data.payload);
      setBookData(response.data.payload);
    });
    //     .catch(() => navigate('/not-found'));
  }, [id, navigate]);

  //Delete functions
  const handleDelete = () => {
    axios
      .delete(`${API}/api/teachers/${id}`)
      .then(() => {
        navigate('/teachers');
      })
      .catch((e) => console.error(e));
  };

  const displayComponent = (event) => {
    console.log('indisplayComponent');
    setView(true);
  };
  const [currentPage, setCurrentPage] = useState(1);

  const [studentsPerPage] = useState(2);

  const indexOfLastRecord = currentPage * studentsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - studentsPerPage;
  const currentRecords = student.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(student.length / studentsPerPage);

  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <div>
        <h2 className="font-bold mt-10 mb-6 text-center text-3xl'">
          Teacher Dashboard
        </h2>
      </div>
      <p className='font-bold'>
        Teacher Name:
        <span className='font-semibold'>{teacher.teacher_name}</span>
      </p>
      <p className='font-bold'>
        Teacher Grade:
        <span className='font-semibold'>{teacher.teaching_grade}</span>
      </p>
      <p className='font-bold'>
        School Name:{' '}
        <span className='font-semibold'>{teacher.school_name}</span>
      </p>
      <div className='py-8'>
        <div className=' mt-10 flex md:justify-center ml-6 space-x-6'>
          {/* <Link to={'/logs/new'}> */}
          <button
            className='bg-indigo-500 text-center px-6 py-4 text-white rounded hover:bg-indigo-400'
            onClick={() => setShowModal(true)}
          >
            Add Students{' '}
          </button>
          {/* </Link> */}
          <Link to={'/teachers/'}>
            <button className='bg-indigo-500 text-center px-6 py-4 text-white rounded hover:bg-indigo-400'>
              Back{' '}
            </button>
          </Link>
        </div>
        {showModal ? (
          <>
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              choice={choice}
              teacher={teacher}
              student={student}
              bookData={bookData}
            />
          </>
        ) : null}

        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                    Id
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                    Student Name
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                    Reading Level
                  </th>

                  <th className=' px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                    View
                  </th>
                  <th className=' px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                    Edit
                  </th>
                  <th className=' px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRecords?.map((student) => {
                  return (
                    <tr key={student.student_id}>
                      <td className='px-5 py-5 border-2 border-gray-200 bg-white text-sm'>
                        <Link
                          className='font-bold text-black-700 hover:underline'
                          to={`/students/${student.student_id}`}
                        >
                          {student.student_id}
                        </Link>
                      </td>
                      <td className='px-5 py-5 border-2 border-gray-200 bg-white text-sm'>
                        <Link
                          className='font-bold text-black-700 hover:underline'
                          to={`/students/${student.student_id}`}
                        >
                          {student.student_name}
                        </Link>
                      </td>
                      <td className='px-5 py-5 border-2 border-gray-200 bg-white text-sm '>
                        <Link
                          className='font-bold text-black-700 hover:underline'
                          to={`/students/${student.student_id}`}
                        >
                          {student.reading_level}
                          {/* <Book log={log} bookData={bookData} /> */}
                        </Link>
                      </td>

                      {/* <td className='px-5 py-5 border-2 border-gray-200 bg-white text-sm'>

                        <Link
                          className='font-bold text-black-700 hover:underline'
                          to={`/logs/${student.student_id}`}
                        >
                          {student.reading_minutes}
                        </Link>

                      </td> */}

                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        {/* <div className='flex'> */}
                        {/* <div className="flex-shrink-0 w-10 h-10"> */}
                        <div className='ml-3 p-3 text-sm text-indigo-900'>
                          <Link to={`teachers/{id}/students/${student.student_id}}`}>
                            <button
                              className=' bg-teal-500 px-6 py-4 text-black rounded '
                              onClick={(e) => setView(true)}
                            >
                              <MdTableView />{' '}
                            </button>
                            {view && <StudentLogsView />}
                          </Link>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='ml-3 p-3 text-sm text-indigo-900'>
                          <Link to={`/students/${student.student_id}/edit`}>
                            <button className=' bg-teal-500 px-6 py-4 text-black rounded '>
                              <FaEdit />{' '}
                            </button>
                          </Link>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='ml-3 p-3 text-sm text-indigo-900'>
                          <Link to={`/teachers/${id}/students/`}>
                            <button
                              className=' bg-teal-500 px-6 py-4 text-black rounded '
                              onClick={handleDelete}
                            >
                              <MdDelete />{' '}
                            </button>
                          </Link>
                        </div>
                        {/* </div> */}
                      </td>
                    </tr>
                  );
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
  );
};

export default TeacherDetails;
