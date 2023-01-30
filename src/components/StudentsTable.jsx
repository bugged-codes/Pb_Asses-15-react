import React from "react";
import { Link } from "react-router-dom";
import "../css/Component&Pages.css";

export default function StudentsTable(props) {
	console.log(props);
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
					</tr>
				</thead>
				<tbody>
					<tr className="tr-tbody">
						<td className="td-tbody" title="Student Name">
							Boy1
						</td>
						<td className="td-tbody" title="Student Age">
							20
						</td>
						<td className="td-tbody" title="Student Course">
							{props.course1}
						</td>
						<td className="td-tbody" title="Student Batch">
							{props.batch2}
						</td>
						<td className="td-tbody" title="Edit Student Info">
							<Link to={"/EditStudents"}>Edit</Link>
						</td>
					</tr>
					<tr className="tr-tbody">
						<td className="td-tbody" title="Student Name">
							Girl1
						</td>
						<td className="td-tbody" title="Student Age">
							21
						</td>
						<td className="td-tbody" title="Student Course">
							{props.course1}
						</td>
						<td className="td-tbody" title="Student Batch">
							{props.batch2}
						</td>
						<td className="td-tbody" title="Edit Student Info">
							<Link to={"/EditStudents"}>Edit</Link>
						</td>
					</tr>
					<tr className="tr-tbody">
						<td className="td-tbody" title="Student Name">
							Girl2
						</td>
						<td className="td-tbody" title="Student Age">
							20
						</td>
						<td className="td-tbody" title="Student Course">
							{props.course2}
						</td>
						<td className="td-tbody" title="Student Batch">
							{props.batch1}
						</td>
						<td className="td-tbody" title="Edit Student Info">
							<Link to={"/EditStudents"}>Edit</Link>
						</td>
					</tr>
					<tr className="tr-tbody">
						<td className="td-tbody" title="Student Name">
							Boy2
						</td>
						<td className="td-tbody" title="Student Age">
							23
						</td>
						<td className="td-tbody" title="Student Course">
							{props.course2}
						</td>
						<td className="td-tbody" title="Student Batch">
							{props.batch3}
						</td>
						<td className="td-tbody" title="Edit Student Info">
							<Link to={"/EditStudents"}>Edit</Link>
						</td>
					</tr>
					<tr className="tr-tbody">
						<td className="td-tbody" title="Student Name">
							Girl3
						</td>
						<td className="td-tbody" title="Student Age">
							19
						</td>
						<td className="td-tbody" title="Student Course">
							{props.course2}
						</td>
						<td className="td-tbody" title="Student Batch">
							{props.batch3}
						</td>
						<td className="td-tbody" title="Edit Student Info">
							<Link to={"/EditStudents"}>Edit</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
