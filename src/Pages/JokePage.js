import React, { Component } from 'react';
import Joke from '../Components/Joke/Joke';
import { Link } from 'react-router-dom';
import './JokePage.scss';

export default class JokePage extends Component {
	render() {
		return <div className="joke-page">
			<Link to="/" className="home-link"> <i className="material-icons">arrow_back</i>Categorias</Link>
			<Joke Category={this.props.match.params.Category} />
		</div>;
	}
}

