import { createStore } from 'redux';
import { spices } from './spices';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const config = {
	key: 'root',
	storage,
	debug: true,
	stateReconciler: autoMergeLevel2
};

export const ConfigureStore = () => {
	const store = createStore(persistReducer(config, spices));
	const persistor = persistStore(store);

	return { persistor, store };
};
