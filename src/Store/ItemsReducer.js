
const INITIAL_STATE = {
	data: []
}

function items(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_ITEMS':
			return { ...state, data: [...state.data, ...action.items]}
		case 'ADD_ITEM':
			return {...state, data: [...state.data, action.item]}
		default:
			return state;
	}
}

export default items;