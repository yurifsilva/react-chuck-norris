import React, { useEffect, useState } from 'react';
import ChuckNorrisApi from '../../Services/ChuckNorrisApi';
import JokeItem from './Components/JokeItem';
import Loading from '../Loading/Loading';
import './Joke.scss';

export default function Joke({ Category }) {
	const [Joke, setJoke] = useState({});
	const [IsLoading, setIsLoading] = useState(false);

	async function getJokeByCategory() {
		try {
			setIsLoading(true);
			const result = await ChuckNorrisApi.getJokeByCategory({Category});
			setJoke(result);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getJokeByCategory(Category);
	}, []); //eslint-disable-line
	
	return (
		<div className="joke">
			{IsLoading ? <Loading /> : null}
			{Joke && Joke.id ? <JokeItem Joke={Joke} onClick={getJokeByCategory} /> : null}
		</div>
	);
}
