import { createStore, combineReducers } from "redux";
import Categories from './CategoriesReducer';

const Reducers = combineReducers({
	Categories
})
const store = createStore(Reducers);

export default store;