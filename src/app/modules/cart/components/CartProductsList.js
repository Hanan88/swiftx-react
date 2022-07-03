import React from 'react';
import { useSelector } from 'react-redux';
import CartProductCard from './CartProductCard';

const CartProductsList = () => {
	const cart = useSelector((state) => state.cart.cart);
	return (
		<>
			{cart.length > 0 &&
				cart.map((product) => (
					<CartProductCard product={product} key={product.id} />
				))}
		</>
	);
};

export default CartProductsList;
