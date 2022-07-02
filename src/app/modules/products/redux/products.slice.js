import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './products.thunks';

const initialState = {
	products: [],
	status: 'idle',
	error: null,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.error = null;
				state.status = 'loading';
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				console.log('action', action);
				state.products = action.payload || [];
				state.status = 'success';
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.error = action.payload;
				state.status = 'failed';
			});
	},
});

export default productSlice.reducer;
