import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './product-card';
import { ProductsListContainer } from '../styles';

const ProductsList = ({ products }) => {
	return (
		<ProductsListContainer>
			{products.length > 0 &&
				products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
		</ProductsListContainer>
	);
};

export default ProductsList;

ProductsList.propTypes = {
	products: PropTypes.array.isRequired,
};
