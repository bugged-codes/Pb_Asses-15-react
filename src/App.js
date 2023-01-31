import React, { useState } from 'react';
import MasterRoutes from './components/navigation/MasterRoutes.jsx';
import Navbar from './components/navigation/Navbar.jsx';
import './css/App.css';
import DataContext from './DataContext.js';

function App() {
	const [stuData, setStuData] = useState([{ Name: 'Test Student', Age: 99, Course: 'MERN', Batch: 'October' }]);
	return (
		<div className="App">
			<Navbar />
			<DataContext.Provider value={{ stuArr: stuData, stuArrUpdate: setStuData }}>
				<MasterRoutes />
			</DataContext.Provider>
			{/* stuDataProp={{ stuData, setStuData }} */}
		</div>
	);
}

export default App;
