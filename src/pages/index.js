import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

function Index() {
	const [date, setDate] = useState(null);
	useEffect(() => {
		async function getDate() {
			const res = await fetch("/api/date");
			const newDate = await res.text();
			setDate(newDate);
		}
		getDate();
	}, []);
	return (
		<main>
			<Helmet>
				<title>Gatsby + Node.js (TypeScript) API</title>
			</Helmet>
			<h1>James is cool</h1>
			<h2>Deployed with NOW</h2>

		</main>
	);
}

export default Index;
