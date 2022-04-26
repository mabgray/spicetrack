import * as ActionTypes from './ActionTypes';
import { SPICES } from '../shared/spiceList';

/* export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
}); */

export const addSpices = () => ({
	type: ActionTypes.ADD_SPICES,
	payload: SPICES
});

/* export const addSpices = () => {
	return {
		type: 'ADD_SPICES',
		payload: SPICES
	};
	// return SPICES;
}; */

export const addSpice = (spiceId, gotIt) => ({
	type: ActionTypes.ADD_SPICE,
	payload: { spiceId: spiceId, gotIt: gotIt }
});
