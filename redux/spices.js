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
			/* let listOfSpices = state.spices;
			let spiceId = action.payload.spiceId;
			for (let i = 0; i < listOfSpices.length; i++) {
				if (listOfSpices[i].id === spiceId) {
					// console.log('hi');
					listOfSpices[i].gotIt = action.payload.gotIt;
					let startDate = new Date().toString();
					listOfSpices[i].startDate = startDate;
				}
			} */
			/* 	console.log({
				...state,
				spices: s
			}); */

			let spiceId = action.payload.spiceId;
			let listOfSpices = state.spices.map((spice) => {
				if (spice.id == spiceId) {
					spice.gotIt = action.payload.gotIt;
					spice.startDate = new Date().toString();
				}
				return spice;
			});
			console.log(listOfSpices);
			return {
				...state,
				spices: listOfSpices
			};
		default:
			return state;
	}
};
