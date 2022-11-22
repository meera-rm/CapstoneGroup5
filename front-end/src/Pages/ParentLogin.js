import { useNavigate, useParams } from "react-router-dom";
import { useState} from 'react'
import axios from 'axios';
import parentandchild from '../Components/asset/parentandchild.jpeg'


const API = process.env.REACT_APP_API_URL;

const ParentLogin = () => {

    const navigate = useNavigate();
    const id  = useParams()
    const [students, setStudents] = useState({
        email: '',
        parent_password:'',
    });


    const parentLogin = (event) => {
        setStudents({ ...students, [event.target.id]: event.target.value });
    };

//  not sure if I need axios for this not sure how to add functionality
const handleLogIn = (students) => {
    console.log('Login successful')
    // axios
    //     .post(`${API}/parent-login`, students)
    //     .then(() => {
    //         navigate(`/parent-page`);
    //     })
    //     .catch((error) => {
    //         console.warn(error);
    //     });
};

    const handleForm = (event) => {
        event.preventDefault()
        handleLogIn(students, id)
    }

    return (

    

    <div style={{
        textAlign: 'center',
        fontFamily: 'Georgia',
    }}>
        <br></br>
        <h1>Parent Login</h1>
        <br></br>
        <br></br>
        <img src={parentandchild} alt=""/>
        <form onSubmit={handleForm}>
            <label htmlFor='email'>Enter Email</label> &nbsp;
            <input
            id='parent_email'
                    type='email'
                    value={students.parent_email}
                    onChange={parentLogin}
                    >
            </input>
            <br></br>
            <br></br>
            <label htmlFor='password'>Enter Password</label> &nbsp;
            <input
            id="parent-password"
            type="text"
            value={students.parent_password}
            onChange={parentLogin}
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

            <p>Not yet registered?<a href="/parent-signup" alt="">  Sign Up!</a></p>
        </form>
    </div>

    )
}






export default ParentLogin;