import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const API = process.env.REACT_APP_API_URL;

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  let { teacherId } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/api/students`)
      //  .then((response) => console.log(response.data))
      .then((response) => setStudents(response.data))
      .catch((e) => console.error('catch', e));
  }, [students]);

  return (
    <div className='px-16 py-6 md:col-span-2 '>
      <h2 className='text-center text-indigo-600 '>Students</h2>
      {/* <div className='text-center '>
        <Link to={`/students/new`}>
          <button className=' btn bg-indigo-500 px-4 py-4 rounded text-white hover:bg-teal-400'>
            Add Students{' '}
          </button>
        </Link>
      </div> */}
      <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16'>
        {/* <div className='max-w-sm rounded overflow-hidden shadow-lg '> */}
        {students?.map((student) => {
          return (
            <section
              className='border-2 border-indigo-300 rounded-md pl-2 hover:shadow-md'
              key={student.student_id + student.student_name}
            >
              <div className='display-cards'>
                <Link
                  className='text-center'
                  to={`/students/` + student.student_id}
                  key={student.student_id}
                >
                  {/* </div>
               <div> */}
                  <p className='text-center'>Id: {student.student_id}</p>
                  <p className='text-center'>
                    Student Email: {student.student_email}
                  </p>
                  <p className='text-center'>
                    Parent Email: {student.parent_email}
                  </p>
                  <p className='text-center'>Year: {student.academic_year}</p>
                  <p className='text-center'>
                    Reading Level: {student.reading_level}
                  </p>
                </Link>
              </div>
            </section>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AllStudents;
