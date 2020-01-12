const INITIAL_STATE = {
	Data: [
		'animal'
	]
}

function categories(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_CATEGORIES':
			return { ...state, Data: [...state.Data, ...action.categories] };
		case 'ADD_CATEGORIE':
			return { ...state, Data: [...state.Data, action.categorie] };
		default:
			return state;
	}
}

export default categories;