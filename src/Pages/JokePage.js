import React, { Component } from 'react';
import Joke from '../Components/Joke/Joke';
import { Link } from 'react-router-dom';

export default class JokePage extends Component {
	render() {
		return <>
			<Link to="/">Home</Link>
			<Joke Category={this.props.match.params.Category} />
		</>;
	}
}

