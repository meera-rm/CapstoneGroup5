import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const API = process.env.REACT_APP_API_URL;

const AllTeachers = () => {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/teachers`)
      //  .then((response) => console.log(response.data))
      .then((response) => setTeacherData(response.data.payload))
      .catch((e) => console.error('catch', e));
  }, [teacherData]);

  return (
    <div className='px-16 py-6 md:col-span-2 '>
      <h2 className='text-center text-indigo-600 '>Teachers</h2>
      <div className='text-center '>
        <Link to={`/teachers/new`}>
          <button className='mt-4 btn bg-indigo-500 px-4 py-4 rounded text-white hover:bg-indigo-400'>
            Add Teachers{' '}
          </button>
        </Link>
      </div>
      <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16'>
        {/* <div className='max-w-sm rounded overflow-hidden shadow-lg '> */}
        {teacherData?.map((teacher) => {
          return (
            <section
              className='border-2 border-indigo-300 rounded-md  hover:shadow-md'
              key={teacher.teacher_id + teacher.teacher_name}
            >
              <div className='display-cards'>
                <Link
                  className='text-center'
                  to={`/teachers/` + teacher.teacher_id}
                  key={teacher.teacher_id}
                >
                  {/* <img
                  className='text-center'
                  src={`${book.book_picture}`}
                  alt=''
                /> */}

                  {/* </div>
             <div> */}
                  <p className='text-center'>
                    Teacher Name: {teacher.teacher_name}
                  </p>
                  <p className='text-center'>Subject:{teacher.class_subject}</p>
                  <p className='text-center'>Grade: {teacher.teaching_grade}</p>
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

export default AllTeachers;
