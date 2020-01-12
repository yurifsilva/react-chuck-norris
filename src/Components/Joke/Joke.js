import React, { useEffect, useState } from 'react';
import ChuckNorrisApi from '../../Services/ChuckNorrisApi';

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
	  <div>
		  {IsLoading ? <>Carregando ...</> : <button onClick={getJokeByCategory}>Carregar outra</button>}
		  {Joke && Joke.id ? <>{Joke.value}</> : null}
		</div>
	);
}
