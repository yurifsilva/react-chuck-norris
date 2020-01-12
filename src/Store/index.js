import { createStore, combineReducers } from "redux";
import Categories from './CategoriesReducer';
import Items from './ItemsReducer';

const Reducers = combineReducers({
	Categories,
	Items
})
const store = createStore(Reducers);

export default store;