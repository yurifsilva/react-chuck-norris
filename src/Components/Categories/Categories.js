import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Category from './Components/Category';
import ChuckNorrisApi from '../../Services/ChuckNorrisApi';
import CategoriesActions from '../../Store/CategoriesActions';



export default function Categories() {
	const Categories = useSelector(state => state.Categories.Data);
	const dispatch = useDispatch();

	useEffect(() => {
		async function getAllCategories() {
			const result = await ChuckNorrisApi.getAllCategories();
			dispatch(CategoriesActions.addCategories({Categories: result}));
		}
		
		if (Categories && Categories.length > 0) return;
		getAllCategories();
	}, [Categories, dispatch]);

	return (
		<ul>
			{Categories.map(
				CategoryItem =>
					<Category key={CategoryItem} Category={CategoryItem} />
			)}
		</ul>
	);
}
