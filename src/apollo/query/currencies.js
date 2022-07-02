import { gql } from '@apollo/client';
import { CURRENCY_FRAGMENT } from './fragments';

export const ALL_CURRENCY = gql`
	${CURRENCY_FRAGMENT}
	query currencies {
		currencies {
			...currencyFields
		}
	}
`;
