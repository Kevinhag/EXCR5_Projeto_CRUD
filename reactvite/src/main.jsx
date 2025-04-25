import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Crud from "./Crud.jsx";
import DataList from "./components/DataList.jsx";
import Detalhes from "./Detalhes.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/Card.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<NavBar />
			<div className="container">
				<Routes>
					<Route
						path="/"
						element={<DataList />}
					/>
					<Route
						path="/crud"
						element={<Crud />}
					/>
					<Route
						path="/detalhes"
						element={<Detalhes />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
		<Footer />
	</StrictMode>
);
