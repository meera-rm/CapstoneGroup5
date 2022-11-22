import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const API = process.env.REACT_APP_API_URL;

const ParentSignUp = () => {
	const navigate = useNavigate();
	const id = useParams();
	const [students, setStudents] = useState({
		id: '',
		parent_name: '',
		parent_email: '',
		student_name: '',
		academic_year: '',
		reading_level: '',
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

	return (
		// need to center this div
		<div
			style={{
				textAlign: 'center',
				fontamily: 'Georgia',
			}}
		>
			<h1>Parent Account Sign Up</h1>
			<br></br>
			<br></br>

			<img
				style={{
					width: '400px',
				}}
				src='https://3.files.edl.io/a896/21/05/15/150929-e7565263-7af9-44c3-b0d5-616eb147afcf.png'
				alt=''
			/>

			<br></br>
			<div
				style={{
					fontFamily: 'Georgia',
				}}
			>
				<form onSubmit={handleForm}>
					<label htmlFor='parent-name'>Parent Name</label>
					<br></br>
					<input
						id='parent_name'
						type='text'
						value={students.parent_name}
						onChange={newSignUp}
					/>
					<br></br>
					<br></br>

					<label htmlFor='parent-email'>Parent Email</label>
					<br></br>
					<input
						id='parent-email'
						type='email'
						value={students.parent_email}
						onChange={newSignUp}
					/>
					<br></br>
					<br></br>
					<label htmlFor='student-name'>Student Name</label>
					<br></br>
					<input
						id='student_name'
						type='text'
						value={students.student_name}
						onChange={newSignUp}
					/>
					<br></br>
					<br></br>
					{/* probably could change this in the db to grade */}
					<label htmlFor='academic-year'>Academic Year</label>
					<br></br>
					<input
						id='academic-year'
						type='text'
						value={students.academic_year}
						onChange={newSignUp}
					/>
					<br></br>
					<br></br>
					<label htmlFor='reading-level'>Reading Level</label>
					<br></br>
					<input
						id='reading-level'
						type='text'
						value={students.reading_level}
						onChange={newSignUp}
					/>
					<br></br>
					<br></br>
					<label htmlFor='password'>Password</label>
					<br></br>
					<input
						id='password'
						type='text'
						value={students.password}
						onChange={newSignUp}
					/>
					<br></br>
					<br></br>

					<button
						style={{
							width: '10%',
							backgroundColor: 'teal',
							color: 'white',
							fontFamily: 'Georgia',
						}}
					>
						Create Account
					</button>
				</form>
			</div>
		</div>
	);
};

export default ParentSignUp;
