import React from 'react';
import { PropTypes } from 'prop-types';
import {
	AttribButton,
	AttributesContainer,
	CartCard,
	CartCardDetails,
	QuantityContainer,
} from '../styles';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrementQuantity,
	incrementQuantity,
	removeFromCart,
} from '../redux/cart.slice';
const CartProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const selectedCurrency = useSelector((state) => state.cart.selectedCurrency);

	const productPrice = product
		? product.prices.find((price) => price.currency.symbol === selectedCurrency)
				?.amount
		: 0;
	return (
		<CartCard>
			<div>
				<CartCardDetails>
					<h3>{product.name}</h3>
					<h4>{product.brand}</h4>
					<h5>
						{selectedCurrency}
						{productPrice}
					</h5>
					<AttributesContainer>
						{Object.entries(product.attributes).map(([key, value]) => (
							<AttribButton key={key}>{value}</AttribButton>
						))}
					</AttributesContainer>
				</CartCardDetails>
			</div>
			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<QuantityContainer>
					<button
						disabled={product.quantity >= 10}
						onClick={() => dispatch(incrementQuantity(product.id))}
					>
						<AiOutlinePlus />
					</button>
					<span>{product.quantity}</span>
					<button
						onClick={() =>
							product.quantity > 1
								? dispatch(decrementQuantity(product.id))
								: dispatch(removeFromCart(product.id))
						}
					>
						<AiOutlineMinus />
					</button>
				</QuantityContainer>
				<img src={product.image} alt={product.name} />
			</div>
		</CartCard>
	);
};

export default CartProductCard;

CartProductCard.propTypes = {
	product: PropTypes.any.isRequired,
};
