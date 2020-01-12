import React from 'react';
import { Provider } from 'react-redux';
import Store from '../Store/index';
import Routes from './Routes'

export default function App() {

	return (
		<Provider store={Store}>
			<Routes />
		</Provider>
	);
}
