import * as ActionTypes from './ActionTypes';

export const spices = (
	state = {
		spices: []
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_SPICES:
			// case 'ADD_SPICES':
			return { ...state, spices: action.payload };

		case ActionTypes.ADD_SPICE:
			// case 'ADD_SPICE':
			/* console.log('hello');
			console.log(action.payload); */
			let s = state.spices;
			let spiceId = action.payload.spiceId;
			for (let i = 0; i < s.length; i++) {
				if (s[i].id === spiceId) {
					// console.log('hi');
					s[i].gotIt = action.payload.gotIt;
					let startDate = new Date().toString();
					s[i].startDate = startDate;
				}
			}

			return {
				...state,
				spices: s
			};
		default:
			return state;
	}
};
