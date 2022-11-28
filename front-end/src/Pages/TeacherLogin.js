import { useNavigate, useParams } from "react-router-dom";
import { useState} from 'react'
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

const TeacherLogin = () => {

    const navigate = useNavigate();
    const id  = useParams()
    const [teachers, setTeachers] = useState({
        email: '',
        teacher_password:'',
    });


    const teachLogin = (event) => {
        setTeachers({ ...teachers, [event.target.id]: event.target.value });
	};

//  not sure if I need axios for this not sure how to add functionality
const handleLogIn = (teachers) => {
    console.log('Login successful')
    // axios
    //     .post(`${API}/teacher-login`, teachers)
    //     .then(() => {
    //         navigate(`/teacher-page`);
    //     })
    //     .catch((error) => {
    //         console.warn(error);
    //     });
};

    const handleForm = (event) => {
        event.preventDefault()
        handleLogIn(teachers, id)
    }

    return (

    

    <div style={{
        textAlign: 'center',
        fontFamily: 'Georgia',

    }}>
        <br></br>
        <h1 className="text-gray-700 pb-8 font-bold text-2xl">Teacher Login</h1>
        <br></br>
        <br></br>
        
        <img src="https://t3.ftcdn.net/jpg/01/36/07/10/360_F_136071004_G0M4VBj0VIfkk3eWcV1tF83aKoNMs7Gz.jpg" alt="" />
        
        <br></br>
        <form onSubmit={handleForm} className="bg-white shadow-md rounded px-24 pt-16 pb-10 mb-8 rounded-md ">
            
            <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor='email'>Enter Email</label> &nbsp;
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id='teacher_email'
					type='email'
					value={teachers.teacher_email}
					onChange={teachLogin}
                    >
            </input>
            <br></br>
            <br></br>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='password'>Enter Password</label> &nbsp;
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="teacher-password"
            type="text"
            value={teachers.teacher_password}
            onChange={teachLogin}
            ></input>
            <br></br>
            <br></br>
            <button style={{
                backgroundColor: 'teal',
                width: '10%',
                fontFamily: 'Georgia',
                color: 'white',
            }}>Log In</button>
            <br></br>
            <br></br>

            <p>Not yet registered?<a href="/teacher-signup" alt="">  Sign Up!</a></p>
        </form>
    </div>

    )
}






export default TeacherLogin