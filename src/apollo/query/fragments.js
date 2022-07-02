import { gql } from '@apollo/client';

export const CURRENCY_FRAGMENT = gql`
	fragment currencyFields on Currency {
		label
		symbol
	}
`;
export const ATTRIBUTES_FRAGMENT = gql`
	fragment attributeFields on AttributeSet {
		id
		name
		items {
			displayValue
			value
			id
		}
	}
`;
export const PRODUCTS_FRAGMENT = gql`
	fragment productFields on Product {
		id
		name
		inStock
		gallery
		description
		category
		brand
	}
`;

export const PRICES_FRAGMENT = gql`
	${CURRENCY_FRAGMENT}
	fragment priceFields on Price {
		amount
		currency {
			...currencyFields
		}
	}
`;
