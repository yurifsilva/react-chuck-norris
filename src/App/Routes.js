import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import React from 'react';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	);
}
