import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DisplayStudents from "../pages/DisplayStudents";
import EditStudents from "../pages/EditStudents";
import AddNewStudent from "../pages/AddNewStudent";
import ContactUs from "../pages/ContactUs";
import NotfoundError from "../pages/NotfoundError";
export default function MasterRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Students" element={<DisplayStudents />} />
			<Route path="/EditStudents" element={<EditStudents />} />
			<Route path="/AddNewStudent" element={<AddNewStudent />} />
			<Route path="/ContactUs" element={<ContactUs />} />
			<Route path="*" element={<NotfoundError />} />
		</Routes>
	);
}
