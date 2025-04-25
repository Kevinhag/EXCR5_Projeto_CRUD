import React, { useState, useEffect } from "react";
import CardDetalhes from "./components/CardDetalhes.jsx";

function Detalhes() {
	const [data, setData] = useState([]);
	const [paginaAtual, setPaginaAtual] = useState(1);
	const productsPerPage = 10;
	const [modalOpen, setModalOpen] = useState(false);
	const [itemClicked, setItemClicked] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8800/products")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	const totalPages = Math.ceil(data.length / productsPerPage);

	const indexInicial = (paginaAtual - 1) * productsPerPage;
	const indexFinal = indexInicial + productsPerPage;
	const produtosAtuais = data.slice(indexInicial, indexFinal);

	function clicked(product) {
		setItemClicked(product);
		setModalOpen(true);
	}

	function closeModal() {
		setModalOpen(false);
		setItemClicked(null);
	}

	function diminuirPagina() {
		setPaginaAtual((prev) => Math.max(prev - 1, 1));
	}

	function aumentarPagina() {
		setPaginaAtual((prev) => Math.min(prev + 1, totalPages));
	}

	return (
		<div className="detalhes">
			<div className="paginas">
				<button
					type="button"
					onClick={diminuirPagina}
					disabled={paginaAtual === 1}
				>
					←
				</button>
				<span>
					{paginaAtual} / {totalPages || 1}
				</span>
				<button
					type="button"
					onClick={aumentarPagina}
					disabled={paginaAtual === totalPages}
				>
					→
				</button>
			</div>
			<div className="products-det">
				{produtosAtuais.map((product) => (
					<CardDetalhes
						key={product.id}
						product={product}
                        clicked={clicked}
					/>
				))}
			</div>
			{modalOpen && itemClicked && (
				<div className="modal">
					<div className="modal-content">
						<h1>Detalhes do Produto</h1>
						<p>
							Nome: {itemClicked.name} <br />
							Marca: {itemClicked.brand} <br />
							Preço: {itemClicked.price} <br />
							Descrição: {itemClicked.description}
							<br />
							novo: {itemClicked.is_new} <br />
							Estoque: {itemClicked.stock} <br />
							Rating: {itemClicked.rating} <br />
							Promoção?: {itemClicked.on_sale} <br />
							Tipo: {itemClicked.part_type} <br />
							Data de Criação: {itemClicked.date_added} <br />
							marca: {itemClicked.manufacturer} <br />
							Modelo: {itemClicked.model} <br />
							linha: {itemClicked.product_line} <br />
						</p>
						<button onClick={closeModal}>Fechar</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Detalhes;
