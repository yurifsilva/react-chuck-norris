const INITIAL_STATE = {
	Data: []
}

function categories(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_CATEGORIES':
			return { ...state, Data: [...state.Data, ...action.Categories] };
		case 'ADD_CATEGORIE':
			return { ...state, Data: [...state.Data, action.Categorie] };
		default:
			return state;
	}
}

export default categories;