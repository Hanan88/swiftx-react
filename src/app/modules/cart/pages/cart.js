import React from 'react';
import { useSelector } from 'react-redux';
import { SectionTitle } from '../../products/styles';
import CartProductsList from '../components/CartProductsList';

const Cart = () => {
	const cartTotal = useSelector((state) => state.cart.cartTotal);
	const selectedCurrency = useSelector((state) => state.cart.selectedCurrency);

	return (
		<div style={{ marginInline: '.75rem', paddingInline: '15px' }}>
			<SectionTitle>Cart</SectionTitle>
			<CartProductsList />
			<SectionTitle>
				Total: {selectedCurrency}
				{cartTotal}
			</SectionTitle>
		</div>
	);
};

export default Cart;
