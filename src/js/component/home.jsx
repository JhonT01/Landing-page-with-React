import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Container } from "./container.jsx";
import { Footer } from "./footer.jsx";
//create component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container py-4">
				<Jumbotron />
			</div>

			<Container />

			<Footer />
		</div>
	);
};

export default Home;
