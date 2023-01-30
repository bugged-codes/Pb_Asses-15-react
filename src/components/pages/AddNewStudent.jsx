import React from "react";
import "../../css/Component&Pages.css";

export default function AddNewStudent() {
	return (
		<div>
			<form action="">
				<div className="nameInput-div">
					<label htmlFor="stdName">Name: </label>
					<input id="stdName" type="text" placeholder="Enter Students Name" name="Name" required />
				</div>
				<br />
				<div className="ageInput-div">
					<label htmlFor="stdAge">Age: </label>
					<input id="stdAge" type="number" min={18} max={26} placeholder="Age" name="Age" required />
				</div>
				<br />
				<div className="radioInput-div">
					<div>
						<input type="radio" id="MERN-radio" name="Course" value={"MERN"} />
						<label htmlFor="MERN-radio">MERN</label>
					</div>
					<br />
					<div>
						<input type="radio" id="MEAN-radio" name="Course" value={"MEAN"} />
						<label htmlFor="MEAN-radio">MEAN</label>
					</div>
					<br />
					<div>
						<input type="radio" id="MEVN-radio" name="Course" value={"MEVN"} />
						<label htmlFor="MEVN-radio">MEVN</label>
					</div>
				</div>
				<br />
				<div className="selectIput-div">
					<label htmlFor="Batch-select">Choose the Batch: </label>
					<select name="Batch" id="Batch-select">
						<option value="August">Choose from list</option>
						<option value="August">August</option>
						<option value="September">September</option>
						<option value="October">October</option>
					</select>
				</div>
			</form>
		</div>
	);
}
