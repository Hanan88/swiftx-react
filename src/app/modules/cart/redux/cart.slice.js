import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cart: [],
	cartTotal: 0,
	selectedCurrency: '$',
	status: 'idle',
	error: null,
};

const getCartTotal = (newCart, selectedCurrency) => {
	return newCart.reduce((acc, product) => {
		const productPrice = product.prices.find(
			(price) => price.currency.symbol === selectedCurrency
		)?.amount;
		return acc + productPrice * product.quantity;
	}, 0);
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setSelectedCurrency: (state, action) => {
			state.selectedCurrency = action.payload;
			state.cartTotal = getCartTotal(state.cart, action.payload);
		},
		addToCart: (state, { payload }) => {
			let newCart = [...state.cart];
			const PRODUCT_INDEX = newCart.findIndex(
				(product) => product.id === payload.id
			);
			if (PRODUCT_INDEX <= -1) {
				newCart = newCart.concat({ ...payload, quantity: 1 });
			} else {
				newCart = newCart.map((product) => {
					if (product.id === payload.id) {
						return { ...product, quantity: product.quantity + 1 };
					} else {
						return product;
					}
				});
			}
			state.cart = newCart;
			state.cartTotal = getCartTotal(newCart, state.selectedCurrency);
		},
		removeFromCart: (state, { payload }) => {
			let newCart = [...state.cart];
			newCart = newCart.filter((product) => product.id !== payload);
			state.cart = newCart;
			state.cartTotal = getCartTotal(newCart, state.selectedCurrency);
		},
		incrementQuantity: (state, { payload }) => {
			const newCart = [...state.cart].map((product) => {
				if (product.id === payload) {
					return { ...product, quantity: product.quantity + 1 };
				}
				return product;
			});
			state.cart = newCart;
			state.cartTotal = getCartTotal(newCart, state.selectedCurrency);
		},
		decrementQuantity: (state, { payload }) => {
			const newCart = [...state.cart].map((product) => {
				if (product.id === payload) {
					return { ...product, quantity: product.quantity - 1 };
				}
				return product;
			});
			state.cart = newCart;
			state.cartTotal = getCartTotal(newCart, state.selectedCurrency);
		},
	},
});

export const {
	setSelectedCurrency,
	addToCart,
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
} = productSlice.actions;

export default productSlice.reducer;
