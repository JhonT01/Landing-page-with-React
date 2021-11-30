import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Container } from "./container.jsx";

//create component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container py-4">
				<Jumbotron />
			</div>

			<Container />
		</div>
	);
};

export default Home;
