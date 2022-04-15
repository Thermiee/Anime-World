import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import animeReducer from './anime';
import fetchAnimeThunk from './animeThunk';

const rootReducer = combineReducers({
  animeReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchAnimeThunk());

export default store;
