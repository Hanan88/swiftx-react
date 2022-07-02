import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
//styles
import GlobalStyle from '../src/styles/global';
import 'react-image-gallery/styles/css/image-gallery.css';
//Apollo client
import { ApolloProvider } from '@apollo/client';
import store from './redux/store';
import { Provider } from 'react-redux';
import { GQClient } from './apollo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ApolloProvider client={GQClient}>
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<App />
			</BrowserRouter>
		</Provider>
	</ApolloProvider>
);
