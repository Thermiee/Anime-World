import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import animeReducer from './anime/anime';
import fetchAnimeThunk from './animeThunk';

const rootReducer = combineReducers({
  animeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAnimeThunk());

export default store;
