import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../app/modules/cart/redux/cart.slice';
import productsReducer from '../app/modules/products/redux/products.slice';
import { GQClient } from './../apollo/index';

const store = configureStore({
	reducer: {
		store: productsReducer,
		cart: cartReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: { client: GQClient },
				// how to use : extra.client.query({query: Query_Name, variables?: {}})
			},
		}),
});

export default store;
