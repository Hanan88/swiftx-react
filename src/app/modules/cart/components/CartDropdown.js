import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { CartContainer, ActionsContainer } from '../styles';
import CartProductsList from './CartProductsList';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const CartDropdown = ({ closeCart }) => {
	const cartTotal = useSelector((state) => state.cart.cartTotal);
	const selectedCurrency = useSelector((state) => state.cart.selectedCurrency);
	const cartQuantity = useSelector((state) => state.cart.cart.length);
	const navigate = useNavigate();
	const dropDownRef = useRef(null);

	useEffect(() => {
		//  add when mounted
		document.addEventListener('mousedown', handleClick);
		//  clean on unmount
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);
	const handleClick = (e) => {
		// clicked inside the modal
		e.stopPropagation();

		console.log(dropDownRef?.current?.contains(e.target));
		if (dropDownRef?.current?.contains(e.target)) {
			return;
		}
		closeCart();
	};

	return (
		<CartContainer ref={dropDownRef}>
			<h2 style={{ marginBlock: '5px 20px' }}>
				<b>My Bag</b>: <span>{cartQuantity} items</span>
			</h2>
			<CartProductsList />
			<h5>
				<span>Total</span>
				<span>
					{selectedCurrency}
					{cartTotal}
				</span>
			</h5>
			<ActionsContainer>
				<button
					onClick={() => {
						navigate('/cart');
						closeCart();
					}}
				>
					View Bag
				</button>
				<button onClick={() => closeCart()}>check out</button>
			</ActionsContainer>
		</CartContainer>
	);
};

export default CartDropdown;

CartDropdown.propTypes = {
	closeCart: PropTypes.any.isRequired,
};
