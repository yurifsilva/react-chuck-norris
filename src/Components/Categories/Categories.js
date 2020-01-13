import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Category from './Components/Category';
import ChuckNorrisApi from '../../Services/ChuckNorrisApi';
import CategoriesActions from '../../Store/CategoriesActions';
import Loading from '../Loading/Loading';
import './Categories.scss';


export default function Categories() {
	const Categories = useSelector(state => state.Categories.Data);
	const [IsLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		async function getAllCategories() {
			try {
				setIsLoading(true);

				const result = await ChuckNorrisApi.getAllCategories();
				dispatch(CategoriesActions.addCategories({Categories: result}));
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false)
			}
			
		}
		
		if (Categories && Categories.length > 0) return;
		getAllCategories();
	}, [Categories, dispatch]);

	return (
		<div>
			{IsLoading ? <Loading /> : null}
			<ul className="categories">
				{Categories.map(
					CategoryItem =>
						<Category key={CategoryItem} Category={CategoryItem} />
				)}
			</ul>
		</div>
	);
}
