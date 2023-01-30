import React from "react";
import { Link } from "react-router-dom";
import "../css/Component&Pages.css";

export default function StudentsHeader() {
	return (
		<div className="subheader student-header">
			<h1 className="student-header-child">Students Details.</h1>
			<div className="link-btn student-header-child">
				<Link className="a-btn" to={"/AddNewStudent"}>
					Add New Student
				</Link>
			</div>
		</div>
	);
}
