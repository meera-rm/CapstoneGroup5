import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import avatarProfilePics from '../../utils/AvatarProfilePics';
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const API = process.env.REACT_APP_API_URL;

const NewTeachers = () => {

  const navigate = useNavigate();
  // let { teacherId } = useParams();



  const avatarNames=['abby' ,'midnight','angel','salem','gizmo','kiki','cuddles','boo','jack','patches','mimi','annie','pumpkin','sam',
    'rascal','lucy','pepper','milo','snickers','bob'];

  

  //declare states
  const [teacher, setTeacher] = useState({
    teacher_name: '',
    school_name: '',
    school_district: '',
    school_address: '',
    zipcode: '',
    state_name: '',
    class_subject: '',
    teaching_grade: '',
    teacher_profilePic: avatarProfilePics(avatarNames),
  });

  const handleTextChange = (event) => {
    console.log(event.target.value);

    setTeacher({
      ...teacher,
      [event.target.id]: event.target.value,
    });
    console.log('in text change', teacher);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inhandlesumbit', teacher);
    axios
      .post(`${API}/api/teachers/new`, teacher)
      .then(() => {
        console.log('added');
        navigate(`/teachers`);
        toast.success("You have added a new student");
      })
      .catch((c) => console.error('catch', c));
  };

  return (
    // <div className='add-trans'>
    // <div className='flex flex-col text-center h-screen items-center justify-center '>
    //   <div className='rounded-md  py-4 px-6 text-black lg:w-2/5 md:w-3/5 w-4/5'>
    <div className='flex items-center h-screen w-full bg-teal-lighter'>
      <div className='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
        <form
          className='mb-4 md:flex md:flex-wrap md:justify-between'
          onSubmit={handleSubmit}
        >
         
         <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='student-profilePic'
            >
            Teacher profilepic
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='student-profilePic'
              type='text'
              name='student-profilePic'
              value={teacher.teacher_profilePic}
              disabled={true}
            />
          </div>
          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='teacher_name'
            >
              TeacherName
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='teacher_name'
              name='teacher_name'
              value={teacher.teacher_name}
              type='text'
              autoComplete='off'
              onChange={handleTextChange}
              placeholder='Teacher name'
            />
          </div>
          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='school_name'
            >
              Picture url
            </label>
           <input
              className='border py-2 px-3 text-grey-darkest'
              id='pic'
              type='text'
              name='pic'
              value={teacher.pic}
              autoComplete='off'
              placeholder='Your picture'
              onChange={handleTextChange}
            />
          </div> 

          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='school_name'
            >
              School Name
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='school_name'
              type='text'
              name='school_name'
              value={teacher.school_name}
              autoComplete='off'
              placeholder='School name'
              onChange={handleTextChange}
            />
          </div>
          {/* <div className='mb-4'>
            <label className='py-6' htmlFor='school_district'>
              School Disctrict:
            </label>
            <input
              className='border-2 border-black-700 outline'
              id='school_district'
              type='text'
              name='school_district'
              placeholder='school_district'
              value={teacher.school_district}
              autoComplete='off'
              onChange={handleTextChange}
            />
          </div> */}
          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='school_district'
            >
              School District
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='school_district'
              type='text'
              name='school_district'
              placeholder='School district'
              value={teacher.school_district}
              autoComplete='off'
              onChange={handleTextChange}
            />
          </div>
          {/* <div className='mb-4'>
            <label className='py-6' htmlFor='school_address'>
              School Address:
            </label>
            <input
              className='border-2 border-black-700 outline'
              id='school_address'
              name='school_address'
              type='text'
              value={teacher.school_address}
              autoComplete='off'
              placeholder='school_address'
              onChange={handleTextChange}
            />
          </div> */}
          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='school_address'
            >
              School Address
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='school_address'
              name='school_address'
              type='text'
              value={teacher.school_address}
              autoComplete='off'
              placeholder='School address'
              onChange={handleTextChange}
            />
          </div>

          {/* <div className='mb-4'>
            <label className='py-6' htmlFor='zipcode'>
              ZipCode:{' '}
            </label>
            <input
              className='border-2 border-black-700 outline'
              id='zipcode'
              type='text'
              name='zipcode'
              value={teacher.zipcode}
              autoComplete='off'
              placeholder='zipcode'
              onChange={handleTextChange}
            />
          </div> */}
          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='zipcode'
            >
              ZipCode
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='zipcode'
              type='text'
              name='zipcode'
              value={teacher.zipcode}
              autoComplete='off'
              placeholder='Zipcode'
              onChange={handleTextChange}
            />
          </div>
          {/* <div className='mb-4'>
            <label className='py-6' htmlFor='state_name'>
              State Name:
            </label>
            <input
              className='border-2 border-black-700 outline'
              id='state_name'
              type='text'
              name='state_name'
              value={teacher.state_name}
              autoComplete='off'
              placeholder='state_name'
              onChange={handleTextChange}
            />
          </div> */}
          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='state_name'
            >
              State Name
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='state_name'
              type='text'
              name='state_name'
              value={teacher.state_name}
              autoComplete='off'
              placeholder='State name'
              onChange={handleTextChange}
            />
          </div>
          {/* <div className='mb-4'>
            <label className='py-6' htmlFor='class_subject'>
              Subject:
            </label>
            <input
              className='border-2 border-black-700 outline'
              id='class_subject'
              type='text'
              name='class_subject'
              value={teacher.class_subject}
              autoComplete='off'
              placeholder='class_subject'
              onChange={handleTextChange}
            />
          </div> */}
          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='class_subject'
            >
              Subject
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='class_subject'
              type='text'
              name='class_subject'
              value={teacher.class_subject}
              autoComplete='off'
              placeholder='Class subject'
              onChange={handleTextChange}
            />
          </div>
          {/* <div className='mb-4'>
            <label className='py-6' htmlFor='teaching_grade'>
              Teaching Grade:
            </label>
            <input
              className='border-2 border-black-700 outline'
              id='teaching_grade'
              type='text'
              name='teaching_grade'
              value={teacher.teaching_grade}
              autoComplete='off'
              placeholder='teaching_grade'
              onChange={handleTextChange}
            />
          </div> */}
          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='teaching_grade'
            >
              Teaching Grade:
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='teaching_grade'
              type='text'
              name='teaching_grade'
              value={teacher.teaching_grade}
              autoComplete='off'
              placeholder='Teaching grade'
              onChange={handleTextChange}
            />
          </div>
          <br />
          {/* <div className='add-btn'> */}
          <div className='justify-center ml-6 space-x-6 '>
            <input
              className=' px-5 py-3 rounded bg-teal-500'
              type='submit'
              value='submit'
            />

            <Link to={`/teachers`}>
              <button className=' px-5  py-3 rounded bg-teal-500'>
                Cancel{' '}
              </button>
            </Link>
          </div>
        </form>
        <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </div>
    </div>
  );
};

export default NewTeachers;
