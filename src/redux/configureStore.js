import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ name: 'Buzer app' });

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export const configureStore = () => ({ store, persistor });
