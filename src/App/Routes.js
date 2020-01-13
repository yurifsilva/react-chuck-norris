import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import JokePage from '../Pages/JokePage';
import React from 'react';

export default function Routes() {
	return (
		<BrowserRouter basename="/react-chuck-norris">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/category/:Category" component={JokePage} /> } />
			</Switch>
		</BrowserRouter>
	);
}
