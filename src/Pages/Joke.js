import React, { Component } from 'react';
import JokeItem from '../Components/Joke';
import { Link } from 'react-router-dom';

export default class Joke extends Component {
	render() {
		return <>
			<Link to="/">Home</Link>
			<JokeItem Category={this.props.match.params.Category} />
		</>;
	}
}

