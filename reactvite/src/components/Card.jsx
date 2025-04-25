import React from "react";

function Card({ product }) {
	const rating = parseInt(product.rating, 10);
	const onSale = parseInt(product.on_sale, 10) !== 0;
	const isNew = parseInt(product.is_new, 10) !== 0;

	const randomNumber = Math.floor(Math.random() * 5000) + 1;

	const renderStars = () =>
		Array.from({ length: 5 }, (_, i) => (
			<span
				key={i}
				className="material-symbols-outlined"
				style={{
					fontSize: "1.2rem",
					color: i < rating ? "#ffd500" : "var(--border)",
				}}
			>
				star
			</span>
		));
	`1`;

	return (
		<div className={onSale ? "promotion promotion-glow" : "common"}>
			<div className="product-cart">
				{isNew && <div className="product-new">NEW</div>}
				<div className="cart-card-product-name">
					<div className="cart-product-name">{product.name}</div>
					<div className="cart-product-brand">{product.brand}</div>
				</div>
				<div className="cart-card-price">R$ {product.price}</div>
				<div className="cart-product-btn">
					<div className="cart-card-rating">
						<div className="rating-stars">{renderStars()}</div>
						<div className="rating-users">{randomNumber} Users</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
