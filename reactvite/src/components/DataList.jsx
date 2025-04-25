import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import "../styles/App.css";


function DataList() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8800/products")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className="products">
			{data.map((product) => (
			<Card
				key={product.id}
				product={product}
			/>
			))}
		</div>
	);
}

export default DataList;
