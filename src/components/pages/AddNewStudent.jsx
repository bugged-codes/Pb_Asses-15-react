import React, { useContext, useEffect } from 'react';
import DataContext from '../../DataContext';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../css/Component&Pages.css';

export default function AddNewStudent() {
	const location = useLocation();
	const index = location.state.data;
	console.log('Index is:', index);
	const back = useNavigate();
	const context = useContext(DataContext);

	function handleChange(event) {}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleCancel() {
		back('/Students');
	}
	return (
		<div>
			<form action="">
				<div className="input-flex">
					<div className="nameInput-div">
						<label htmlFor="stdName">Name: </label>
						<input id="stdName" type="text" placeholder="Enter Students Name" name="Name" />
					</div>
					<div className="ageInput-div">
						<label htmlFor="stdAge">Age: </label>
						<input id="stdAge" type="number" min={18} max={26} placeholder="Age" name="Age" />
					</div>
				</div>
				<div className="radioInput-div" id="radioInput-div">
					<label htmlFor="radioInput-div">Choose one course from the following: </label>
					<br />
					<br />
					<div>
						<input type="radio" id="MERN-radio" name="Course" value={'MERN'} />
						<label htmlFor="MERN-radio">MERN</label>
					</div>
					<br />
					<div>
						<input type="radio" id="MEAN-radio" name="Course" value={'MEAN'} />
						<label htmlFor="MEAN-radio">MEAN</label>
					</div>
					<br />
					<div>
						<input type="radio" id="MEVN-radio" name="Course" value={'MEVN'} />
						<label htmlFor="MEVN-radio">MEVN</label>
					</div>
				</div>
				<div className="input-flex2">
					<div className="selectIput-div">
						<label htmlFor="Batch-select">Choose the Batch: </label>
						<select name="Batch" id="Batch-select">
							<option value="August">Choose from list &nbsp;</option>
							<option value="August">August</option>
							<option value="September">September</option>
							<option value="October">October</option>
						</select>
					</div>
					<div className="form-btn-div">
						<button className="form-btn">Submit</button>
						<button className="form-btn" onClick={handleCancel()}>
							Cancel
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
