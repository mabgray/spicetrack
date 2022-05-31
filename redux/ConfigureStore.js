import { createStore } from 'redux';
import { spices } from './spices';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
	key: 'root',
	storage,
	debug: true
};

export const ConfigureStore = () => {
	const store = createStore(persistReducer(config, spices));
	const persistor = persistStore(store);

	return { persistor, store };
};
