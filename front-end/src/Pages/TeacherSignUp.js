import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const API = process.env.REACT_APP_API_URL;

const TeacherSignUp = () => {
	const navigate = useNavigate();
	const id = useParams();
	const [teachers, setTeachers] = useState({
		id: '',
		teacher_name: '',
		teacher_email: '',
		school_name: '',
		school_district: '',
		school_address: '',
		zipcode: '',
		class_subject: '',
		password: '',
	});

	const newSignUp = (event) => {
		setTeachers({ ...teachers, [event.target.id]: event.target.value });
	};

	const handleSignUp = (teachers) => {
		axios
			.post(`${API}/teacher-signup`, teachers)
			.then(() => {
				navigate(`/teacher-login`);
			})
			.catch((error) => {
				console.warn(error);
			});
	};

	const handleForm = (event) => {
		event.preventDefault();
		handleSignUp(teachers, id);
	};

	return (
		// need to center this div
		<div>
			<h1>Teacher Account Sign Up</h1>
			<form onSubmit={handleForm}>
				<label htmlFor='teacher-name'>Teacher Name</label>
				<br></br>
				<input
					id='teacher_name'
					type='text'
					value={teachers.teacher_name}
					onChange={newSignUp}
				/>
				<br></br>
				{/* think we need to add email to database? */}
				<label htmlFor='teacher-email'>Teacher Email</label>
				<br></br>
				<input
					id='teacher_name'
					type='email'
					value={teachers.teacher_name}
					onChange={newSignUp}
				/>
				<br></br>
				<label htmlFor='teacher-name'>School Name</label>
				<br></br>
				<input
					id='school_name'
					type='text'
					value={teachers.school_name}
					onChange={newSignUp}
				/>
				<br></br>
				<label htmlFor='school-district'>School District</label>
				<br></br>
				<input
					id='school-district'
					type='text'
					value={teachers.school_district}
					onChange={newSignUp}
				/>
				<br></br>
				<label htmlFor='teacher-name'>Class Subject</label>
				<br></br>
				<input
					id='teacher_name'
					type='text'
					value={teachers.class_subject}
					onChange={newSignUp}
				/>
				<br></br>
				<label htmlFor='school-address'>School Address</label>
				<br></br>
				<input
					id='school-address'
					type='text'
					value={teachers.school_address}
					onChange={newSignUp}
				/>
				<br></br>
				<label htmlFor='zipcode'>Zipcode</label>
				<br></br>
				<input
					id='zipcode'
					type='text'
					value={teachers.zipcode}
					onChange={newSignUp}
				/>
				<br></br>
				<label htmlFor='grade'>Grade</label>
				<br></br>
				<input
					id='grade'
					type='text'
					// need to add grade into teacher database
					value={teachers.grade}
					onChange={newSignUp}
				/>
				<br></br>
			</form>
		</div>
	);
};

export default TeacherSignUp;
