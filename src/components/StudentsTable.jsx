import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/Component&Pages.css';
import DataContext from '../DataContext';

export default function StudentsTable(props) {
	// console.log(props);

	const tableContext = useContext(DataContext);
	console.log('table Context is: ', tableContext);

	return (
		<>
			<table border={0}>
				<thead>
					<tr>
						<th className="td-thead">Name</th>
						<th className="td-thead">Age</th>
						<th className="td-thead">Course</th>
						<th className="td-thead">Batch</th>
						<th className="td-thead">Change</th>
						<th className="td-thead">Delete</th>
					</tr>
				</thead>
				<tbody>
					{tableContext.stuArr.map((stuItem, stuIndex) => {
						return (
							<tr key={stuIndex}>
								<td title="Student Name">{stuItem.Name}</td>
								<td title="Student Age">{stuItem.Age}</td>
								<td title="Student Course">{stuItem.Course}</td>
								<td title="Student Batch">{stuItem.Batch}</td>
								<td title="Edit Student Info">
									<Link to={'/EditStudents'}>Edit</Link>
								</td>
								<td title="Delete Student Info">
									<button>🗑️</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
