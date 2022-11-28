import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '../Components/asset/ScholarSheep.png';
import child from '../Components/asset/childread.png';
const API = process.env.REACT_APP_API_URL;

const ParentSignUp = () => { 
 const navigate = useNavigate();
  const id = useParams();
  const [students, setStudents] = useState({ 
    parent_name: '',
    parent_email: '',
    student_name: '',
    academic_year: '',
    reading_level: '',
	   grade:'',
    password: '',
  });

  const newSignUp = (event) => {
    setStudents({ ...students, [event.target.id]: event.target.value });
  };

  const handleSignUp = (students) => {
    axios
      .get(`${API}/parent-signup`, students)
      .then(() => {
        navigate(`/parent-login`);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleForm = (event) => {
    event.preventDefault();
    handleSignUp(students, id);
  };

return(
  


        <div >
        {/* <h1 class='text-center'>Parent Login</h1> */}
        {/* <div class='flex items-center justify-center mb-6'>
          <img class=' h-18 w-64 rounded-3xl' src={child} alt='' />
  </div> */}
        <div class=' h-96 flex items-center h-screen w-full bg-teal-lighter'>
          <div class='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
         
            <div class='flex items-center justify-center'>
              <img class=' h-12 w-10 rounded-full' src={logoImage} alt='' />
            </div>
    
            <h1 class='block w-full text-center text-grey-darkest mb-6'>
              {' '}
              Parent Login{' '}
            </h1>
            <form
              class='mb-4 md:flex md:flex-wrap md:justify-between'
              onSubmit={handleForm}
            >
    
         <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest"  htmlFor='parent-name'>Parent First Name</label>
        <input class="border py-2 px-3 text-grey-darkest" type="text" name="parent_name" id="parent_name" value={students.parent_name}
                     onChange={newSignUp} required/>
        </div>
    
        <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest"  htmlFor='last-name'>Parent Last Name</label>
        <input class="border py-2 px-3 text-grey-darkest" type="text" name="last_name" id="last_name" value={students.lname}
                     onChange={newSignUp} required/>
        </div>
        
        <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="pareant-email">Parent Email</label>
        <input class="border py-2 px-3 text-grey-darkest" type="email" name="parent-email" id="parent-email"  value={students.parent_email}
                       onChange={newSignUp}
                      required/>
        </div> 
        
         <div class="flex flex-col mb-4 md:w-full">
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="student-name">Student Name</label>
            <input class="border py-2 px-3 text-grey-darkest" type="text" name="student-name" id="student-name"  value={students.student_name}
                           onChange={newSignUp}
                          required/>
         </div>
        
        <div class="flex flex-col mb-4 md:w-full">
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="academic-year">Academic Year</label>
            <input class="border py-2 px-3 text-grey-darkest" type="text" name="academic-year" id="academic-year"  value={students.academic_year}
                           onChange={newSignUp}
                          required/>
         </div>
         {/* <div class="flex flex-col mb-4 md:w-full">
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="grade">Grade</label>
            <input class="border py-2 px-3 text-grey-darkest" type="text" name="grade" id="grade"  value={students.grade}
                           onChange={newSignUp}
                          required/>
         </div> */}
        
         <div class="flex flex-col mb-4 md:w-full">
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="reading-level">Reading Level</label>
            <input class="border py-2 px-3 text-grey-darkest" type="text" name="reading-level" id="reading-level"  value={students.reading_level}
                           onChange={newSignUp}
                          required/>
         </div>
        
        <div class="flex flex-col mb-6 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="password">Password</label>
          <input class="border py-2 px-3 text-grey-darkest" type="password"  name="password" id="password"/>
        </div>
        <button class="block bg-teal-600 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
        </form>
        
        <a class="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker" href="/login">Already Registered?<span class='font-bold'>Login</span></a>
        </div>  
        </div> 
       
    
       </div>
      );
    };
    

export default ParentSignUp; 



