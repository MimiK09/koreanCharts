// import axios from "axios";
// import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Homepage = () => {
// On peut envisager l'enregistrement d'un token en arrivant en page d'accueil pour éviter la multiplication des votes=> navigate

	return (
		<>
			<Link to="/Pollpage"><p>A vous de voter</p></Link>
		</>
	);
};

export default Homepage;