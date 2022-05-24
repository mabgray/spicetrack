import { createStore } from 'redux';
import { spices } from './spices';

export const ConfigureStore = () => {
	const store = createStore(spices);

	return store;
};
