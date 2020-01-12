import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Joke from '../Pages/Joke';
import React from 'react';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/category/:Category" component={Joke} /> } />
			</Switch>
		</BrowserRouter>
	);
}
