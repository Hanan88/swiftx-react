import { createAsyncThunk } from '@reduxjs/toolkit';
import { ALL_PRODUCTS } from '../../../../apollo/query/products';

export const getProducts = createAsyncThunk(
	'products/getAllProducts',
	async (category, { extra }) => {
		console.log('category', category);
		const response = await extra.client.query({
			query: ALL_PRODUCTS,
			variables: {
				categoryName: category || 'all',
			},
		});
		console.log('response', response?.data?.category?.products);
		return response?.data?.category?.products;
	}
);
