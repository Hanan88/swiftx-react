/* eslint-disable react/react-in-jsx-scope */

import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsListing from './app/modules/products/pages/products-listing';
import ProductDetails from './app/modules/products/pages/product-details';
import Header from './app/shared/layout/header';
import Cart from './app/modules/cart/pages/cart';
import { Container } from './styles/global';

function App() {
	return (
		<Container>
			<Header />
			<Routes>
				<Route path="/" element={<ProductsListing />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/cart/" element={<Cart />} />
			</Routes>
		</Container>
	);
}

export default App;
