import React from 'react';
import { useSelector } from 'react-redux';

import Categorie from './Components/Categorie';

export default function Categories() {
	const Categories = useSelector(state => state.Categories.Data);
	return (
		<ul>
			{Categories.map(CategorieItem => <Categorie key={CategorieItem} Categorie={CategorieItem} />)}
		</ul>
	);
}
