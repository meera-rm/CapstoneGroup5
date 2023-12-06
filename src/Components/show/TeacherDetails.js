
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import httpService from '../httpService';
import Pagination from '../features/Pagination';
import Modal from '../features/Modal';
import StudentEntry from './StudentEntry';

// import { MdDelete } from 'react-icons/md';
// import { MdTableView } from 'react-icons/md';
// import { FaEdit } from 'react-icons/fa';
// import StudentLogsView from './StudentLogsView';

// import { MdAddComment } from 'react-icons/md';

const API = process.env.REACT_APP_API_URL;

const TeacherDetails = () => {
  const [teacher, setTeacher] = useState([]);
  const [student, setStudent] = useState([]);
  const [choice] = useState(1);
  //  const [bookData, setBookData] = useState([]);
  // const [view, setView] = useState(false);

  let navigate = useNavigate();

  let { id } = useParams();

  //Popup code
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // httpService
    axios
      .get(`${API}/api/teachers/${id}`)
      .then((response) => {
        setTeacher(response.data.payload);
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate, teacher]);

  useEffect(() => {
    // httpService
    axios
      .get(`${API}/api/teachers/${id}/students`)
      .then((response) => {
        // console.log(response.data)
        setStudent(response.data);
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate]);

  // useEffect(() => {
  //   axios.get(`${API}/api/books`).then((response) => {
  //     // console.log(response.data.payload);
  //     setBookData(response.data.payload);
  //   });
  //   //     .catch(() => navigate('/not-found'));
  // }, [id, navigate]);

  //Delete functions
  const handleDelete = (studentId) => {
    // axios
    //   .delete(`${API}/api/teachers/${id}`)
    //   .then(() => {
    //     navigate('/teachers');
    //   })
    //   .catch((e) => console.error(e));
    //  httpService
    axios
      .delete(`${API}/api/students/${studentId}`)
      .then(() => {
        navigate('/students');
      })
      .catch((e) => console.error(e));
  };

  // const displayComponent = (event) => {
  //   console.log('indisplayComponent');
  //   setView(true);
  // };

  const [currentPage, setCurrentPage] = useState(1);

  const [studentsPerPage] = useState(2);

  const indexOfLastRecord = currentPage * studentsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - studentsPerPage;
  const currentRecords = student.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(student.length / studentsPerPage);

  

  return (
     
     <div className='md:container md:mx-auto px-4 sm:px-8'> 
       <div className>
        <h2 className="flex justify-center items-center font-bold mt-10 mb-20 text-teal-600 text-3xl">
          Teacher Dashboard
        </h2>
      </div>
            
       <div className='block text-left mt-15 md:w-1/2 md:mx-auto '>
         <div className='font-bold'>
           Teacher Name:
           <span className='font-semibold'>{teacher.teacher_name}</span>
         </div>
         <div className='font-bold'>
           Teacher Grade:
           <span className='font-semibold'>{teacher.teaching_grade}</span>
         </div>
         <div className='font-bold'>
           School Name:{' '}
           <span className='font-semibold'>{teacher.school_name}</span>
         </div>
       </div>

       <div className='py-8'>
       <div className='mt-10 flex md:justify-center ml-6 space-x-6'>
{/* //           {/* <Link to={'/logs/new'}> */}
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
            />
          </>
        ) : null}
       
         <div className='overflow-x-scroll mt-10'>
         <table className='min-w-full leading-normal'>
          {/* <table className='min-w-full leading-normal'> */}
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
                     Comment
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
                     <StudentEntry student={student} />
                      
                   );
                 })}
               </tbody>
             </table>

             <Pagination
               nPages={nPages}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}/>
            </div>
          </div>
    </div>
  );
};

export default TeacherDetails;








