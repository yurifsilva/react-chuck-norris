import React from 'react';
import Categories from '../Components/Categories/Categories';
import ChuckNorrisImg from '../Assets/Img/norrisbot.png';

import './HomePage.scss'

export default function HomePage() {
	return (
		<div className="home">
			<img src={ChuckNorrisImg} alt="Chuck Norris"/>
			<h1>Categorias</h1>
			<Categories />
		</div>
	);
}
