import React from 'react';

import './JokeItem.scss';

export default function JokeItem({Joke, onClick}) {
	return (
		<div className="joke-item">
			<blockquote>
				<p>{Joke.value}</p>
			</blockquote>
			<button onClick={onClick}>Carregar outra</button>
		</div>
	);
}
