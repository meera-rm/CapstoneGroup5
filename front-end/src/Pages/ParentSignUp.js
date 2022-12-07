import React, { useState } from 'react';
import FirstForm from '../Components/ParentForm/FirstParentForm';
import SecondForm from '../Components/ParentForm/SecondParentForm';
import ThirdForm from '../Components/ParentForm/ThirdParentForm';
import child from '../Components/asset/childread.png';

const ParentSignUp = () => {
  const formList = ['FirstParentForm', 'SecondParentForm', 'ThirdParentForm'];

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const initialValues = {
    // name: "",
    // lastname: "",
    // password: "",
    // confirmPassword: "",
    // username: "",
    // city: "1",
    // address: "",
    // zip: "",
    // terms: "",
    parent_name: '',
    lastname:'',
    parent_email: '',
    student_name: '',
    academic_year: '',
    reading_level: '',
	   grade:'',
    password: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <FirstForm formValues={values} onChange={onChange}></FirstForm>
          </div>
        );
      }
      case 1: {
        return (
          <SecondForm
            formValues={values}
            onChange={onChange}
            // option={states}
          ></SecondForm>
        );
      }
      case 2: {
        return <ThirdForm formValues={values} onChange={onChange}></ThirdForm>;
      }
      default:
        return null;
    }
  };

  // const states = [
  //   { id: "0", name: "Paris" },
  //   { id: "1", name: "London" },
  //   { id: "2", name: "Berlin" },
  //   { id: "3", name: "Warsaw" },
  // ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setTimeout(() => {
      console.log('form', values);
    }, 2000);
    console.log(response);
    return response;
  };

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case 'Person Info': {
        return setPage(0);
      }
      case 'Other Info': {
        return setPage(1);
      }
      case 'Login Info': {
        return setPage(2);
      }
      default:
        setPage(0);
    }
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div className='grid  place-content-center items-center h-screen place-items-center -mt-2 '>
      <div className='flex items-center mt-4 mb-2 justify-center'>
        <img className=' h-22 w-64 rounded-xl' src={child} alt='' />
      </div>
      <ul className='flex mt-8 justify-between w-full'>
        <li
          onClick={setForm}
          className={
            page === 0 ? 'bg-teal-600 w-2/6 rounded-lg  ' : 'bg: transparent'
          }
        >
          <div className='flex items-center '>
            <span
              className={
                page === 0
                  ? 'ml-2 text-black font-medium'
                  : 'ml-2 text-teal-500 cursor-pointer'
              }
            >
              Step 1
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 1 ? 'bg-teal-600  w-2/6 rounded-lg' : 'bg: transparent '
          }
        >
          <div className='flex items-center'>
            <span
              className={
                page === 1
                  ? 'ml-2 text-black font-medium'
                  : 'ml-2 text-teal-500 cursor-pointer'
              }
            >
              Step 2{' '}
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 2 ? 'bg-teal-600 w-2/6 rounded-lg' : 'bg: transparent'
          }
        >
          <div className='flex items-center'>
            <span
              className={
                page === 2
                  ? 'ml-2 text-black font-medium'
                  : 'ml-2 text-teal-500 cursor-pointer'
              }
            >
              {' '}
              Step 3{' '}
            </span>
          </div>
        </li>
      </ul>

      <div className='flex-1'>{handleForms()}</div>
      <div className='grid grid-cols-2 gap-4 mt-4 place-content-center items-center'>
        <button
          onClick={handlePrev}
          className='bg-teal-500  hover:bg-teal-600 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 '
          disabled={page === 0}
        >
          Prev
        </button>
        {page === 2 ? (
          <button
            onClick={handleSubmit}
            className='bg-teal-500 hover:bg-teal-600 rounded-md text-gray-800 font-bold py-2 px-4 '
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className='bg-teal-500 hover:bg-teal-600 rounded-md text-gray-800 font-bold py-2 px-4 '
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ParentSignUp;

// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
// import logoImage from '../Components/asset/ScholarSheep.png';
// import child from '../Components/asset/childread.png';
// const API = process.env.REACT_APP_API_URL;

// const ParentSignUp = () => {
//   const navigate = useNavigate();
//   const id = useParams();
//   const [students, setStudents] = useState({
//     parent_name: '',
//     parent_email: '',
//     student_name: '',
//     academic_year: '',
//     reading_level: '',
//     grade: '',
//     password: '',
//   });

//   const newSignUp = (event) => {
//     setStudents({ ...students, [event.target.id]: event.target.value });
//   };

//   const handleSignUp = (students) => {
//     axios
//       .get(`${API}/parent-signup`, students)
//       .then(() => {
//         navigate(`/parent-login`);
//       })
//       .catch((error) => {
//         console.warn(error);
//       });
//   };

//   const handleForm = (event) => {
//     event.preventDefault();
//     handleSignUp(students, id);
//   };

//   return (
//     <div>
//       {/* <h1 class='text-center'>Parent Login</h1> */}
//       {/* <div class='flex items-center justify-center mb-6'>
//           <img class=' h-18 w-64 rounded-3xl' src={child} alt='' />
//   </div> */}
//       <div class=' h-96 flex items-center h-screen w-full bg-teal-lighter'>
//         <div class='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
//           <div class='flex items-center justify-center'>
//             <img class=' h-12 w-10 rounded-full' src={logoImage} alt='' />
//           </div>

//           <h1 class='block w-full text-center text-grey-darkest mb-6'>
//             {' '}
//             Parent Login{' '}
//           </h1>
//           <form
//             class='mb-4 md:flex md:flex-wrap md:justify-between'
//             onSubmit={handleForm}
//           >
//             <div class='flex flex-col mb-4 md:w-full'>
//               <label
//                 class='mb-2 uppercase font-bold text-lg text-grey-darkest'
//                 htmlFor='parent-name'
//               >
//                 Parent First Name
//               </label>
//               <input
//                 class='border py-2 px-3 text-grey-darkest'
//                 type='text'
//                 name='parent_name'
//                 id='parent_name'
//                 defaultValue={students.parent_name}
//                 onChange={newSignUp}
//                 required
//               />
//             </div>

//             <div class='flex flex-col mb-4 md:w-full'>
//               <label
//                 class='mb-2 uppercase font-bold text-lg text-grey-darkest'
//                 htmlFor='last-name'
//               >
//                 Parent Last Name
//               </label>
//               <input
//                 class='border py-2 px-3 text-grey-darkest'
//                 type='text'
//                 name='last_name'
//                 id='last_name'
//                 defaultValue={students.lname}
//                 onChange={newSignUp}
//                 required
//               />
//             </div>

//             <div class='flex flex-col mb-4 md:w-full'>
//               <label
//                 class='mb-2 uppercase font-bold text-lg text-grey-darkest'
//                 htmlFor='pareant-email'
//               >
//                 Parent Email
//               </label>
//               <input
//                 class='border py-2 px-3 text-grey-darkest'
//                 type='text'
//                 name='parent-email'
//                 id='parent-email'
//                 defaultValue={students.parent_email}
//                 onChange={newSignUp}
//                 required
//               />
//             </div>

//             <div class='flex flex-col mb-4 md:w-full'>
//               <label
//                 class='mb-2 uppercase font-bold text-lg text-grey-darkest'
//                 htmlFor='student-name'
//               >
//                 Student Name
//               </label>
//               <input
//                 class='border py-2 px-3 text-grey-darkest'
//                 type='text'
//                 name='student-name'
//                 id='student-name'
//                 defaultValue={students.student_name}
//                 onChange={newSignUp}
//                 required
//               />
//             </div>

//             <div class='flex flex-col mb-4 md:w-full'>
//               <label
//                 class='mb-2 uppercase font-bold text-lg text-grey-darkest'
//                 htmlFor='academic-year'
//               >
//                 Academic Year
//               </label>
//               <input
//                 class='border py-2 px-3 text-grey-darkest'
//                 type='text'
//                 name='academic-year'
//                 id='academic-year'
//                 defaultValue={students.academic_year}
//                 onChange={newSignUp}
//                 required
//               />
//             </div>
//             {/* <div class="flex flex-col mb-4 md:w-full">
//             <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="grade">Grade</label>
//             <input class="border py-2 px-3 text-grey-darkest" type="text" name="grade" id="grade"  value={students.grade}
//                            onChange={newSignUp}
//                           required/>
//          </div> */}

//             <div class='flex flex-col mb-4 md:w-full'>
//               <label
//                 class='mb-2 uppercase font-bold text-lg text-grey-darkest'
//                 htmlFor='reading-level'
//               >
//                 Reading Level
//               </label>
//               <input
//                 class='border py-2 px-3 '
//                 type='text'
//                 name='reading-level'
//                 id='reading-level'
//                 defaultValue={students.reading_level}
//                 onChange={newSignUp}
//                 required
//               />
//             </div>

//             <div class='flex flex-col mb-6 md:w-full'>
//               <label
//                 class='mb-2 uppercase font-bold text-lg text-grey-darkest'
//                 htmlFor='password'
//               >
//                 Password
//               </label>
//               <input
//                 class='border py-2 px-3 text-grey-darkest'
//                 type='text'
//                 name='password'
//                 id='password'
//                 defaultValue={students.reading_level}
//                 onChange={newSignUp}
//                 required
//               />
//             </div>
//             <button
//               class='block bg-teal-600 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded'
//               type='submit'
//             >
//               Create Account
//             </button>
//           </form>

//           <a
//             class='block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker'
//             href='/login'
//           >
//             Already Registered?<span class='font-bold'>Login</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParentSignUp;
