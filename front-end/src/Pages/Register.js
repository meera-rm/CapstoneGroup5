import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '../Components/asset/ScholarSheep.png';
import app from "../firebase";

const Register = () => {
	const navigate = useNavigate();
	const id = useParams();
	const [user, setUser] = useState({
		user_firstName: '',
		user_lastName: '',
		user_email: '',
		user_password: '',
	});

	const handleChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};

	const auth = getAuth(app);

	const handleSignUp = () => {
		createUserWithEmailAndPassword(
			auth,
			user.user_firstName,
			user.user_lastName,
			user.user_email,
			user.user_password
		)
			.then((userCredential) => {
				const user = userCredential.user;
				if (user) {
					alert(`${user.user_email} account successfully created`);
					navigate('/login');
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				console.log(
					`${errorCode} ${user.user_email} Account creation has failed, please enter a valid email.`
				);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(user);
		handleSignUp();
	};
	return (
		<div>
			{/* <h1 class='text-center'>Parent Login</h1> */}
			{/* <div class='flex items-center justify-center'>
              <img class=' h-22 w-48 rounded-full' src={parentandchild} alt='' />
              </div> */}
			<div class='flex  mt-5 items-center h-screen w-full bg-teal-lighter'>
				<div class='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
					<div class='flex items-center justify-center'>
						<img class=' h-12 w-18 rounded-full' src={logoImage} alt='' />
					</div>

					<h1 class='block w-full text-center text-grey-darkest mb-6'>
						{' '}
						Register{' '}
					</h1>
					<form
						class='mb-4 md:flex md:flex-wrap md:justify-between'
						onSubmit={handleSubmit}
					>
						<div class='flex flex-col mb-4 md:w-full'>
							<label
								class='mb-2 uppercase font-bold text-lg text-grey-darkest'
								htmlFor='user_firstName'
							>
								First Name
							</label>
							<input
								class='border py-2 px-3 text-grey-darkest'
								type='text'
								name='user_firstName'
								id='user_firstName'
								defaultValue={user.user_firstName}
								onChange={handleChange}
							/>
						</div>
						<div class='flex flex-col mb-4 md:w-full'>
							<label
								class='mb-2 uppercase font-bold text-lg text-grey-darkest'
								htmlFor='user_LastName'
							>
								Last Name
							</label>
							<input
								class='border py-2 px-3 text-grey-darkest'
								type='text'
								name='user_lastName'
								id='user_lastName'
								defaultValue={user.user_lastName}
								onChange={handleChange}
							/>
						</div>
						<div class='flex flex-col mb-4 md:w-full'>
							<label
								class='mb-2 uppercase font-bold text-lg text-grey-darkest'
								htmlFor='user_email'
							>
								Email
							</label>
							<input
								class='border py-2 px-3 text-grey-darkest'
								type='email'
								name='user_email'
								id='user_email'
								defaultValue={user.user_email}
								onChange={handleChange}
							/>
						</div>

						<div class='flex flex-col mb-6 md:w-full'>
							<label
								class='mb-2 uppercase font-bold text-lg text-grey-darkest'
								htmlFor='user_password'
							>
								Password
							</label>
							<input
								class='border py-2 px-3 text-grey-darkest'
								type='password'
								name='user_password'
								id='user_password'
								defaultValue={user.user_password}
								onChange={handleChange}
							/>
						</div>

						<button
							class='block bg-teal-600 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded'
							type='submit'
						>
							Create Account
						</button>
					</form>

					<a
						class='block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker'
						href='/login'
					>
						Already Registered?<span class='font-bold'>Login</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Register;
