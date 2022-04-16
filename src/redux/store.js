import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import animeReducer from './anime/anime';
import fetchAnimeThunk from './animeThunk';
// import fetchFactThunk from './factThunk';
// import factReducer from './fact/fact';

const rootReducer = combineReducers({
  animeReducer,
  // factReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchAnimeThunk());
// store.dispatch(fetchFactThunk());

export default store;
