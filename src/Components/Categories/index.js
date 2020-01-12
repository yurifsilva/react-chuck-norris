import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categorie from './Components/Categorie';
import ChuckNorrisApi from '../../Services/ChuckNorrisApi';

function addCategories({ Categories }) {
	return {type: 'ADD_CATEGORIES', Categories}
}

export default function Categories() {
	const Categories = useSelector(state => state.Categories.Data);
	const dispatch = useDispatch();

	useEffect(() => {
		async function getAllCategories() {
			const result = await ChuckNorrisApi.getAllCategories();
			dispatch(addCategories({Categories: result}));
		}
		getAllCategories();
	}, []); //eslint-disable-line

	return (
		<ul>
			{Categories.map(
				CategorieItem =>
					<Categorie key={CategorieItem} Categorie={CategorieItem} />
			)}
		</ul>
	);
}
