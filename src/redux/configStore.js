import { 
  createStore, 
  combineReducers, 
  applyMiddleware, 
} from "redux";
import thunk from "redux-thunk";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import card from './modules/card'

const persistConfig = {
  key: 'root',
  storage
};

const middlewares = [thunk];

const rootReducer = combineReducers({ card });
const enhancer = applyMiddleware(...middlewares);

const enhancedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(enhancedReducer, enhancer);

export default store;