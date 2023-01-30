import React from "react";
import MasterRoutes from "./components/navigation/MasterRoutes.jsx";
import Navbar from "./components/navigation/Navbar.jsx";
import "./css/App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<MasterRoutes />
		</div>
	);
}

export default App;
