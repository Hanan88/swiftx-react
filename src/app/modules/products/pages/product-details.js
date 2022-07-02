/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { addToCart as addToCartAction } from '../../cart/redux/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PRODUCT_BY_ID } from '../../../../apollo/query/products';
import ProductGallery from '../components/product-details/product-gallery';
import {
	ProductDetailsContainer,
	GalleryWrapper,
	DetailsSection,
	AttributeSet,
	AttributesContainer,
	AttribButton,
	SectionTitle,
	SuccessButton,
} from '../styles';

const ProductDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const selectedCurrency = useSelector((state) => state.cart.selectedCurrency);
	const [productAttributes, setProductAttributes] = useState(null);
	const { data, loading, error } = useQuery(PRODUCT_BY_ID, {
		variables: { productId: id },
	});
	const product = data ? data.product : null;
	const productPrice = product
		? product.prices.find((price) => price.currency.symbol === selectedCurrency)
				?.amount
		: 0;

	const validateProductAttributes = () => {
		let isValid = true;
		let inValidAttribute = null;
		product.attributes.forEach((attribute) => {
			if (!productAttributes || !productAttributes[attribute.name]) {
				isValid = false;
				inValidAttribute = attribute.name;
			}
		});
		return { isValid, inValidAttribute };
	};

	const addToCart = () => {
		const { isValid, inValidAttribute } = validateProductAttributes();
		if (!isValid) {
			alert(`Please Select a value for product ${inValidAttribute} first.`);
			return;
		}
		const cartProduct = {
			name: product.name,
			price: product.price,
			image: product.gallery[0],
			id: product.id,
			category: product.category,
			brand: product.brand,
			prices: product.prices,
			attributes: productAttributes,
		};
		console.log('will add to cart', cartProduct);
		dispatch(addToCartAction(cartProduct));
	};
	if (loading) {
		return <p>loading...</p>;
	}
	if (error) {
		return <p>Something went wrong .. please try again later</p>;
	}

	return (
		<>
			{product && (
				<ProductDetailsContainer>
					<GalleryWrapper>
						<ProductGallery images={product.gallery} />
					</GalleryWrapper>
					<DetailsSection>
						<h3>{product.name}</h3>
						<h5>{product.brand}</h5>
						{product.attributes.length > 0 &&
							product.attributes.map((attribute) => (
								<AttributeSet key={attribute.id}>
									<SectionTitle>{attribute.name}:</SectionTitle>
									<AttributesContainer>
										{attribute.items.length > 0 &&
											attribute.items.map((item) => (
												<AttribButton
													isColor={attribute.name === 'Color'}
													color={item?.value}
													isSelected={
														productAttributes &&
														productAttributes[attribute.name] &&
														productAttributes[attribute.name] === item.value
													}
													key={item.id}
													onClick={() =>
														setProductAttributes((prev) => {
															const newAttribs = prev ? { ...prev } : {};
															newAttribs[attribute.name] = item.value;
															return newAttribs;
														})
													}
												>
													{attribute.name === 'Color'
														? item?.displayValue
														: item?.value}
												</AttribButton>
											))}
									</AttributesContainer>
								</AttributeSet>
							))}

						<SectionTitle>Price:</SectionTitle>
						<h5>
							{selectedCurrency}
							{productPrice}
						</h5>
						<SuccessButton onClick={addToCart}>Add to Cart</SuccessButton>
						<div dangerouslySetInnerHTML={{ __html: product.description }} />
					</DetailsSection>
				</ProductDetailsContainer>
			)}
		</>
	);
};

export default ProductDetails;
