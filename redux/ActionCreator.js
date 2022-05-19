import * as ActionTypes from './ActionTypes';
import { SPICES } from '../shared/spiceList';

// addSpices called when page loads in main.js

export const addSpices = () => ({
	type: ActionTypes.ADD_SPICES,
	payload: SPICES
});

// addSpices called when it is clicked

export const addSpice = (spiceId, gotIt) => ({
	type: ActionTypes.ADD_SPICE,
	payload: { spiceId: spiceId, gotIt: gotIt }
});
