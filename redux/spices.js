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
		// this is called when user clicks on a spice ?
		case ActionTypes.ADD_SPICE:
			let spiceId = action.payload.spiceId;
			let listOfSpices = state.spices.map((spice) => {
				if (spice.id == spiceId) {
					spice.gotIt = action.payload.gotIt;
					// spice that is selected gets a date
					// is this where startDate is initialized? this is a new property
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
