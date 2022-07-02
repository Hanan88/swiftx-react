import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
	addTypename: false,
	resultCaching: false,
});

export const GQClient = new ApolloClient({
	// Provide required constructor fields
	cache: cache,
	uri: 'http://localhost:4000/',
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
		},
		mutate: {
			fetchPolicy: 'no-cache',
		},
	},
});
