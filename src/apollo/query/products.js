import { gql } from '@apollo/client';
import {
	ATTRIBUTES_FRAGMENT,
	PRICES_FRAGMENT,
	PRODUCTS_FRAGMENT,
} from './fragments';
export const ALL_PRODUCTS = gql`
	${PRODUCTS_FRAGMENT}
	${PRICES_FRAGMENT}
	query products($categoryName: String!) {
		category(input: { title: $categoryName }) {
			name
			products {
				...productFields
				prices {
					...priceFields
				}
			}
		}
	}
`;

export const PRODUCT_BY_ID = gql`
	${PRODUCTS_FRAGMENT}
	${PRICES_FRAGMENT}
	${ATTRIBUTES_FRAGMENT}
	query Product($productId: String!) {
		product(id: $productId) {
			...productFields
			prices {
				...priceFields
			}
			attributes {
				...attributeFields
			}
		}
	}
`;

export const ALL_CATEGORIES = gql`
	query Categories {
		categories {
			name
		}
	}
`;
