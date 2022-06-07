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
			let spicesList = [];
			if (state.spices.length === 0) {
				return { ...state, spices: action.payload };
			}
			for (let i = 0; i < action.payload.length; i++) {
				// added find to check if the spice is already there so we were able to keep the persisted data
				let stateSpice = state.spices.find((x) => {
					return x.id === action.payload[i].id;
				});

				// if it does find it
				if (stateSpice) {
					spicesList.push(stateSpice);
				} else {
					spicesList.push(action.payload[i]);
				}
			}
			return { ...state, spices: spicesList };

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
