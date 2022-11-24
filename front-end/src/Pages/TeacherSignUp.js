import React, { useState } from 'react';


function Form() {
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState({
		teacher_email: '',
		password: '',
		// confirmPassword: "",
		teacher_name: '',
		school_name: '',
		school_address: '',
		zipcode: '',
		school_district: '',
		class_subject: '',
	});

	function PersonalInfo({ formData, setFormData }) {
		return (
			<div className='personal-info-container'>
				<div className='mt-6'>
					<label className='text-left px-4' htmlFor='teacher-name'>
						Teacher Name
					</label>
					<input className="outline"
						type='text'
						placeholder='Teacher Name...'
						value={formData.teacher_name}
						onChange={(e) => {
							setFormData({ ...formData, teacher_name: e.target.value });
						}}
						required
					/>
				</div>

				<div className='mt-6'>
					<label className='text-left px-4' htmlFor='school-name'>
						School Name
					</label>
					<input className="outline"
						type='text'
						placeholder='School Name...'
						value={formData.school_name}
						onChange={(e) => {
							setFormData({ ...formData, school_name: e.target.value });
						}}
						required
					/>
				</div>
				<div className='mt-6'>
					<label className='text-left px-4' htmlFor='school-address'>
						School Address
					</label>
					<input className="outline"
						type='text'
						placeholder='School Address...'
						value={formData.school_address}
						onChange={(e) => {
							setFormData({ ...formData, school_address: e.target.value });
						}}
						required
					/>
				</div>
				<div className='mt-6'>
					<label className='text-left px-4' htmlFor='zipcode'>
						Zipcode
					</label>
					<input className="outline"
						type='number'
						placeholder='Zipcode...'
						value={formData.zipcode}
						onChange={(e) => {
							setFormData({ ...formData, zipcode: e.target.value });
						}}
						required
					/>
				</div>
			</div>
		);
	}

	function SignUpInfo({ formData, setFormData }) {
		return (
			<div className='sign-up-container'>
				<div className='mt-6'>
					<label className='text-left px-4' htmlFor='teacher-email'>
						Teacher Email
					</label>
					<input className="outline"
						type='email'
						placeholder='Email...'
						value={formData.teacher_email}
						onChange={(event) =>
							setFormData({ ...formData, teacher_email: event.target.value })
						}
						required
					/>
				</div>
				<div className='mt-6'>
					<label className='text-left px-4' htmlFor='password'>
						Password
					</label>
					<input className="outline"
						type='password'
						placeholder='Password...'
						value={formData.password}
						onChange={(event) =>
							setFormData({ ...formData, password: event.target.value })
						}
						required
					/>
				</div>
				<div className='mt-6'>
					<label className='text-left px-4' htmlFor='school-district'>
						School District
					</label>
					<input className="outline"
						type='text'
						placeholder='School District...'
						value={formData.school_district}
						onChange={(event) =>
							setFormData({ ...formData, school_district: event.target.value })
						}
						required
					/>
				</div>

				<div className='mt-6'>
					<label className='text-left px-4' htmlFor='class-subject'>
						Class Subject
					</label>
					<input className="outline"
						type='text'
						placeholder='Class Subject...'
						value={formData.class_subject}
						onChange={(event) =>
							setFormData({ ...formData, class_subject: event.target.value })
						}
						required
					/>
				</div>
			</div>
		);
	}
	const FormTitles = ['Sign Up', 'Personal Info'];

	const PageDisplay = () => {
		if (page === 0) {
			return <SignUpInfo formData={formData} setFormData={setFormData} />;
		}
		// if (page === 1)
		else {
			return <PersonalInfo formData={formData} setFormData={setFormData} />;
		}
	};

	return (
		<div className='form'>
			<div className='progressbar'>
				<div
					style={{
						width: page === 0 ? '50%' : '100%',
					}}
				></div>
			</div>
			<div className='form-container'>
				<div className='header'>
					<h1>{FormTitles[page]}</h1>
				</div>
				<div className='body'>{PageDisplay()}</div>
				<div className='footer'>
					<button
						disabled={page === 0}
						onClick={() => {
							setPage((currPage) => currPage - 1);
						}}
					>
						Prev
					</button>
					<button
						onClick={() => {
							if (page === FormTitles.length - 1) {
								alert('FORM SUBMITTED');
								console.log(formData);
							} else {
								setPage((currPage) => currPage + 1);
							}
						}}
					>
						{page === FormTitles.length - 1 ? 'Submit' : 'Next'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Form;
