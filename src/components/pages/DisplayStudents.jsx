import React from "react";
import StudentsHeader from "../StudentsHeader";
import StudentsTable from "../StudentsTable";

export default function DisplayStudents() {
	const stdData = {
		batch1: "September",
		batch2: "October",
		batch3: "November",
		course1: "MERN",
		course2: "MEVN",
	};
	return (
		<div>
			<StudentsHeader />
			<StudentsTable batch1={stdData.batch1} batch2={stdData.batch2} batch3={stdData.batch3} course1={stdData.course1} course2={stdData.course2} />
		</div>
	);
}
