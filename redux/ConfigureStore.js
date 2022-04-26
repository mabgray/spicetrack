import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { spices } from './spices';

export const ConfigureStore = () => {
	const store = createStore(
		spices,
		/* combineReducers({
			spices
		}), */
		applyMiddleware(thunk, logger)
	);

	return store;
};
