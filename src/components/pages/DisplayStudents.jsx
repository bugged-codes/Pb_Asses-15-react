import React, { useContext } from 'react';
import DataContext from '../../DataContext';
import StudentsHeader from '../StudentsHeader';
import StudentsTable from '../StudentsTable';

export default function DisplayStudents() {
	// const stdData = {
	// 	batch1: "September",
	// 	batch2: "October",
	// 	batch3: "November",
	// 	course1: "MERN",
	// 	course2: "MEVN",
	// };

	const stuContext = useContext(DataContext);
	console.log('stuContext is: ', stuContext);

	return (
		<div>
			<StudentsHeader />
			{/* <StudentsTable batch1={prop2.} batch2={stdData.batch2} batch3={stdData.batch3} course1={stdData.course1} course2={stdData.course2} /> */}
			<DataContext.Provider value={{ stuArr: stuContext.stuArr, stuArrUpdate: stuContext.stuArr2Update }}>
				<StudentsTable />
			</DataContext.Provider>
		</div>
	);
}
