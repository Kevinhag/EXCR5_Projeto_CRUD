import React from "react";
import "../styles/CardDetalhes.css";

function Card({ product, clicked }) {
	const rating = parseInt(product.rating, 10);
	const onSale = parseInt(product.on_sale, 10) !== 0;
	const isNew = parseInt(product.is_new, 10) !== 0;

	const randomNumber = Math.floor(Math.random() * 5000) + 1;

    const renderStars = () =>
        Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className="material-symbols-outlined"
            style={{ fontSize:'1.2rem', color:i < rating ? '#ffd500' : 'var(--border)' }}
          >
            star
          </span>
        ));
		

	return (
		<div className={onSale ? "promotion promotion-glow" : "common-det"}>
			<div className="product-det">
				{isNew && <div className="product-new">NEW</div>}
				<div className="card-product-name">
					<div className="product-name">{product.name}</div>
					<div className="product-brand">{product.brand}</div>
				</div>
				<div className="product-img">

				</div>
				<div className="card-price">R$ {product.price}</div>
				<div className="card-rating">
					<div className="rating-stars">{renderStars()}</div>
					<div className="rating-users">{randomNumber} Users</div>
				</div>
				<button
					className="product-btn"
					onClick={() => clicked(product)}>
					Detalhes...
				</button>
			</div>
		</div>
	);
}

export default Card;
