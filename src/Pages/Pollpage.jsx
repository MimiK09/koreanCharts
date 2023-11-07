import axios from "axios";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

library.add(faCirclePlus); // Ajoutez d'autres icônes si nécessaire

// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Pollpage = () => {
	const [listOfTitles, setListOfTitles] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [isNewCount, setIsNewCount] = useState(false);
	// Prévoir fonction pour définir quelle semaine nous sommes
	let chosenWeek = 43;
	// Récupération des données de la BDD des compétiteurs de la semaine
	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3000/getListTitles?week=${chosenWeek}`
			);
			console.log(response.data);
			setListOfTitles(response.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error.response); // contrairement au error.message d'express
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleClickPlusPoint = (id, points) => {
		let newPoint = points + 1;
		setIsNewCount(true);
		return newPoint;
	  };
	  

	return (
		<>
			{isLoading ? (
				<main>
					<p>Je charge</p>
				</main>
			) : (
				<main>
					<h1> Les titres de la semaine {chosenWeek}</h1>
					<div>
						{listOfTitles.map((title) => {
							console.log("map", title);
							return (
								<div key={title._id} className="tuile-title-bloc">
									<div>
										<p>{title.Title}</p>
										<p> - </p>
										<p>{title.Artist}</p>
									</div>
									<div>
										<FontAwesomeIcon
											icon={faCirclePlus}
											className="icon-plus"
											onClick={() =>
												handleClickPlusPoint(title._id, title.Points)
											}
										/>
										{isNewCount ? (
											<p>{newPoint}</p>
										) : (
											<p>{title.Points} points</p>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</main>
			)}
		</>
	);
};

export default Pollpage;
