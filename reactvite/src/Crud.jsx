import React, { useState, useEffect } from "react";
import "./styles/Crud.css";

function Crud() {
	const [data, setData] = useState([]);
	const [itemclicked, setItemClicked] = useState(null);
	const [formState, setFormState] = useState({
		name: "",
		brand: "",
		price: "",
		manufacturer: "",
		product_line: "",
		model: "",
		part_type: "",
		rating: 0,
		stock: 0,
		is_new: false,
		on_sale: false,
		description: "",
	});

	const types = [
		"graphics_card",
		"cpu",
		"ram",
		"ssd",
		"hdd",
		"motherboard",
		"cooler",
		"psu",
		"case",
		"monitor",
		"keyboard",
		"mouse",
		"microphone",
		"audio_interface",
		"speakers",
		"headphones",
		"webcam",
	];

	useEffect(() => {
		fetch("http://localhost:8800/products")
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => console.error(err));
	}, []);

	const Clicked = (product) => {
		setItemClicked(product);
		setFormState({ ...product });
	};

	const newProduct = () => {
		setItemClicked(null);
		setFormState({
			name: "",
			brand: "",
			price: "",
			manufacturer: "",
			product_line: "",
			model: "",
			part_type: "",
			rating: 0,
			stock: 0,
			is_new: false,
			on_sale: false,
			description: "",
		});
	};

	const handleUpdate = () => {
		if (!formState.id) return;
		fetch(`http://localhost:8800/products/${formState.id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formState),
		})
			.then((res) => {
				if (!res.ok) throw new Error("Erro ao atualizar");
				return fetch("http://localhost:8800/products");
			})
			.then((r) => r.json())
			.then((json) => {
				setData(json);
				alert("Produto atualizado com sucesso!");
			})
			.catch(() => alert("Erro ao atualizar produto."));
	};

	const handleAdd = () => {
		fetch("http://localhost:8800/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formState),
		})
			.then((res) => {
				if (!res.ok) throw new Error("Erro ao adicionar");
				return fetch("http://localhost:8800/products");
			})
			.then((r) => r.json())
			.then((json) => {
				setData(json);
				alert("Produto adicionado com sucesso!");
			})
			.catch(() => alert("Erro ao adicionar produto."));
	};

	const handleDelete = () => {
		if (!formState.id) return;
		if (!window.confirm("Deseja realmente excluir este produto?")) return;
		fetch(`http://localhost:8800/products/${formState.id}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (!res.ok) throw new Error("Erro ao excluir");
				return fetch("http://localhost:8800/products");
			})
			.then((r) => r.json())
			.then((json) => {
				setData(json);
				newProduct();
				alert("Produto excluído com sucesso!");
			})
			.catch(() => alert("Erro ao excluir produto."));
	};

	return (
		<div>
			<div className="list-products">
				<div className="list">
					<button
						onClick={newProduct}
						className="new-btn"
					>
						Novo Produto
					</button>
					{data.map((product) => (
						<button
							className="product-list"
							key={product.id}
							onClick={() => Clicked(product)}
						>
							<div>{product.id}</div>
							<div>{product.name}</div>
							<div>{product.brand}</div>
						</button>
					))}
				</div>
				<div className="product-details">
					<h1>Detalhes</h1>
					<div className="product-details-content">
						<div>
							<label htmlFor="name">Nome: </label>
							<input
								id="name"
								name="name"
								type="text"
								value={formState.name}
								onChange={({ target }) =>
									setFormState({ ...formState, name: target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="brand">Marca: </label>
							<input
								id="brand"
								name="brand"
								type="text"
								value={formState.brand}
								onChange={({ target }) =>
									setFormState({ ...formState, brand: target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="price">Preço: </label>
							<input
								id="price"
								name="price"
								type="number"
								value={formState.price}
								onChange={({ target }) =>
									setFormState({ ...formState, price: target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="manufacturer">Fabricante: </label>
							<input
								id="manufacturer"
								name="manufacturer"
								type="text"
								value={formState.manufacturer}
								onChange={({ target }) =>
									setFormState({ ...formState, manufacturer: target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="product_line">Linha: </label>
							<input
								id="product_line"
								name="product_line"
								type="text"
								value={formState.product_line}
								onChange={({ target }) =>
									setFormState({ ...formState, product_line: target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="model">Modelo: </label>
							<input
								id="model"
								name="model"
								type="text"
								value={formState.model}
								onChange={({ target }) =>
									setFormState({ ...formState, model: target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="part_type">Tipo: </label>
							<select
								id="part_type"
								name="part_type"
								value={formState.part_type}
								onChange={({ target }) =>
									setFormState({ ...formState, part_type: target.value })
								}
							>
								<option value="">Selecione...</option>
								{types.map((type) => (
									<option
										key={type}
										value={type}
									>
										{type}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor="rating">Rating: </label>
							<input
								id="rating"
								name="rating"
								type="number"
								min="0"
								max="5"
								value={formState.rating}
								onChange={({ target }) =>
									setFormState({ ...formState, rating: target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="stock">Estoque: </label>
							<input
								id="stock"
								name="stock"
								type="number"
								value={formState.stock}
								onChange={({ target }) =>
									setFormState({ ...formState, stock: target.value })
								}
							/>
						</div>
					</div>
					<div>
						<label htmlFor="is_new">Novo: </label>
						<input
							id="is_new"
							name="is_new"
							type="checkbox"
							checked={formState.is_new}
							onChange={({ target }) =>
								setFormState({ ...formState, is_new: target.checked })
							}
						/>
					</div>
					<div>
						<label htmlFor="on_sale">Promoção: </label>
						<input
							id="on_sale"
							name="on_sale"
							type="checkbox"
							checked={formState.on_sale}
							onChange={({ target }) =>
								setFormState({ ...formState, on_sale: target.checked })
							}
						/>
					</div>
					<div className="col">
						<label htmlFor="description">Descrição: </label>
						<input
							id="description"
							name="description"
							type="text"
							value={formState.description}
							onChange={({ target }) =>
								setFormState({ ...formState, description: target.value })
							}
						/>
					</div>
					<div className="actions">
						{formState.id ? (
							<button
								type="button"
								onClick={handleUpdate}
							>
								Atualizar
							</button>
						) : (
							<button
								type="button"
								onClick={handleAdd}
							>
								Adicionar
							</button>
						)}
						{formState.id && (
							<button
								type="button"
								onClick={handleDelete}
							>
								Excluir
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Crud;
