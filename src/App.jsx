import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./assets/Header";
import Homepage from "./Pages/Homepage"
import Pollpage from "./Pages/Pollpage";
// import axios from "axios";
// import { useState, useEffect } from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faKey, faListAlt } from '@fortawesome/free-solid-svg-icons';
// library.add(faEnvelope, faKey, faListAlt);

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/pollPage" element={<Pollpage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
