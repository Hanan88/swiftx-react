/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductsList from './../components/products-list';
import { getProducts } from './../../cart/redux/cart.thunks';

const ProductsListing = () => {
	const products = useSelector((state) => state.store.products);
	// eslint-disable-next-line no-unused-vars
	const [params] = useSearchParams();
	const dispatch = useDispatch();
	let category = params.getAll('cat')[0];

	useEffect(() => {
		dispatch(getProducts(category));
	}, [dispatch, category]);

	useEffect(() => {}, [location]);
	return (
		<>
			<ProductsList products={products} />
		</>
	);
};

export default ProductsListing;
