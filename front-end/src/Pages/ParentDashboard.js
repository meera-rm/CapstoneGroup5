import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const ParentDashboard = () => {
	let { id } = useParams();
	const [students, setStudents] = useState({
	
		parent_email: '',
		student_name: '',
		academic_year: '',
	});

	
    // something going on with our student back end
	useEffect(() => {
		axios
        .get(`${API}/api/students/${id}`)
             .then((response) => console.log(response.data))
			// .then((response) => setStudents(response.data.payload))
			.catch((error) => console.error('catch', error));
	});

//     const [logs, setLogs] = useState({
//         reading_minutes: '',
//         pages_read: '',
//         book_id: '',
//         reading_inference: '',
            
//     })

//     const handleaddLogButton = (event) => {
//         event.preventDefault()
//             axios
//             .post(`${API}/logs/new`)
//             .then((response) => setLogs(response.data.payload))
//             .catch((error) => console.error('catch', error));
    
//         }
//   const handleEditButton = (event) => {

//   }

//   const handleDelteButton = (event) => {

//   }

//    const theDate = new Date('2022-11-30')

	

	return (
		<div>
			<div>
				<div>Parent Email: {students.parent_email}</div>
				<div>Childs Name: {students.student_name}</div>
				<div>Grade: {students.academic_year}</div>
			</div>

			{/* need to add books */}
			<div>Books</div>

			{/* <div>
				<button onClick={handleaddLogButton}>Add Logs</button>
			</div> */}

			<table>
				<tbody>
					<tr>
						<th>
							<strong>Date</strong>
						</th>

						<th>
							<strong>Minutes Read</strong>
						</th>

						<th>
							<strong>Pages Read</strong>
						</th>

						<th>
							<strong>Book Title</strong>
						</th>

						<th>
							<strong>Your Thoughts</strong>
						</th>

						<th>
							<strong>Teachers Comments</strong>
						</th>

						<th>
							<strong>Edit</strong>
						</th>

						<th>
							<strong>Delete</strong>
						</th>
					</tr>
				</tbody>
				{/* <tr>
                <td>{theDate}</td>
                <td>{logs.reading_minutes}</td>
                <td>{logs.pages_read}</td>
                <td>{logs.book_id}</td>
                <td>{logs.reading_inference}</td>
                <td>teacherscomment</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
            </tr> */}
			</table>
		</div>
	);
};


export default ParentDashboard;
