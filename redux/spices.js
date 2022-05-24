import * as ActionTypes from './ActionTypes';

export const spices = (
	// this is a parameter
	state = {
		spices: []
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_SPICES:
			return { ...state, spices: action.payload };
		// we are importing the ActionTypes from above
		case ActionTypes.ADD_SPICE:
			let spiceId = action.payload.spiceId;
			let listOfSpices = state.spices.map((spice) => {
				if (spice.id == spiceId) {
					spice.gotIt = action.payload.gotIt;
					// spice that is selected gets a date
					spice.startDate = new Date().toString();
				}
				return spice;
			});

			return {
				...state,
				spices: listOfSpices
			};
		default:
			return state;
	}
};
