import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { loadState } from '../core/localStorage';

const middlewareList = [thunk, logger];
const store = createStore(reducers, loadState(), composeWithDevTools(applyMiddleware(...middlewareList)));

export default store;
