import React from "react";
import { Card } from "./card.jsx";

export const Container = () => {
	let titulos = [
		"Primera Carta",
		"Segunda Carta",
		"Tercera Carta",
		"Cuarta Carta"
	];

	return (
		<div className="container">
			<div className="row">
				{titulos.map((elemento, index, arr) => {
					return (
						<div className="col" key={index}>
							<Card titulo={elemento} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
