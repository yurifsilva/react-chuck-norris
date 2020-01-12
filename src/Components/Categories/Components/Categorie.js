import React, { useState } from 'react';

import JokeItem from './Joke';
import ChuckNorrisApi from '../../../Services/ChuckNorrisApi';

export default function Categorie({Categorie}) {
	const [Joke, setJoke] = useState({});
	const [IsLoading, setIsLoading] = useState(false);

	async function getJokeByCategorie() {
		setIsLoading(true);

		const result = await ChuckNorrisApi.getJokeByCategorie({ Categorie });

		setJoke(result);
		setIsLoading(false);
	}
	return (
		<li>
			<h2 onClick={getJokeByCategorie}>{Categorie}</h2>
			{IsLoading ? <div>Carregando ...</div> : null}
			{Joke && Joke.id ?
				<>
					<JokeItem key={Joke.id} Joke={Joke} />
					<button onClick={getJokeByCategorie}>Carregar outra</button>
				</>
				: null
			}
		</li>
  );
}
