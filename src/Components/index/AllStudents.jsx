import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
// import httpService from '../httpService';
import Table from 'react-bootstrap/Table';

const API = import.meta.env.VITE_API_URL;

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  let { teacherId } = useParams();

  useEffect(() => {
    // httpService
    axios.get(`${API}/api/students`)
      //  .then((response) => console.log(response.data))
      .then((response) =>{
        console.log(response.data);
         setStudents(response.data)
        })
      .catch((e) => console.error('catch', e));
  }, []);

  return (
    <div className='px-16 py-6 md:col-span-2 '>
      <h2 className='text-center  mt-10 mb-5 text-5xl font-bold text-teal-600  '>
        Students
      </h2>
      {useAuth().user?.user_role === 'admin' && (
        <div className='text-center '>
          <Link to={`/students/new`}>
            <button className=' btn bg-indigo-500 px-4 py-4 rounded text-white hover:bg-teal-400'>
              Add Students{' '}
            </button>
          </Link>
        </div>
      )}
      <section className='mt-8 mx-auto max-w-5xl bg-white rounded shadow p-6 text-grey-darkest'>
        <h2 className='text-xl font-bold mb-4'>
          Students
        </h2>
        <div className='overflow-x-auto'>
        <table className='w-full text-left border text-grey-darkest'>
          <thead>
          <tr className='bg-teal-500 text-white'>
              <th className='p-3'>Student</th>
              <th className='p-3'>Student #</th>
              <th className='p-3'>Parent email</th>
              <th className='p-3'>Year</th>
              <th className='p-3'>Reading level</th>
              <th className='p-3'></th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student) => (
              <tr key={student.student_id + student.student_name} className='border-t'>
                <td className='p-3'>{student.student_name}</td>
                <td className='p-3'>{student.student_id}</td>
                <td className='p-3'>{student.parent_email || '—'}</td>
                <td className='p-3'>{student.academic_year || '—'}</td>
                <td className='p-3'>{student.reading_level || '—'}</td>
                <td className='p-3'>
                  <Link to={`/students/${student.student_id}`} className='underline text-teal-700'>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </section>
    </div>
  );
};

export default AllStudents;
