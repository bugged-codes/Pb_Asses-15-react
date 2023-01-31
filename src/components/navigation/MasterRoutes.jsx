import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import DataContext from '../../DataContext';
import Home from '../pages/Home';
import DisplayStudents from '../pages/DisplayStudents';
import EditStudents from '../pages/EditStudents';
import AddNewStudent from '../pages/AddNewStudent';
import ContactUs from '../pages/ContactUs';
import NotfoundError from '../pages/NotfoundError';
export default function MasterRoutes() {
	const masterRContext = useContext(DataContext);
	console.log('Datacontext in master Route: ', masterRContext);
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/Students"
				element={
					<DataContext.Provider value={{ stuArr: masterRContext.stuArr, stuArrUpdate: masterRContext.stuArrUpdate }}>
						<DisplayStudents />
					</DataContext.Provider>
				}
			/>
			<Route
				path="/EditStudents"
				element={
					<DataContext.Provider value={{ stuArr: masterRContext.stuData, stuArrUpdate: masterRContext.setStuData }}>
						<EditStudents />
					</DataContext.Provider>
				}
			/>
			<Route path="/AddNewStudent" element={<AddNewStudent />} />
			<Route path="/ContactUs" element={<ContactUs />} />
			<Route path="*" element={<NotfoundError />} />
		</Routes>
	);
}
