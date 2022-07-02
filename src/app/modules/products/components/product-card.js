import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ProductsCardContainer, ShippingCart } from '../styles';

const ProductCard = ({ product }) => {
	const selectedCurrency = useSelector((state) => state.cart.selectedCurrency);
	const productPrice = product.prices.find(
		(price) => price.currency.symbol === selectedCurrency
	)?.amount;
	const navigate = useNavigate();
	return (
		<ProductsCardContainer onClick={() => navigate(`/product/${product.id}`)}>
			<img src={product.gallery[0]} alt={product.name} />
			<h4>{product.name}</h4>
			<h5>
				{selectedCurrency}
				{productPrice}
			</h5>
			<ShippingCart onClick={() => navigate(`/product/${product.id}`)}>
				<BsCart2 size={25} />
			</ShippingCart>
		</ProductsCardContainer>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	product: PropTypes.any.isRequired,
};
