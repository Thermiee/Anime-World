import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import animeReducer from './redux/anime/anime';

it('Render HomePage', () => {
  const page = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(page).toMatchSnapshot();
});

it('Render fact page', () => {
  const page = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(page).toMatchSnapshot();
});

it('Fetch anime facts', () => {
  const state = animeReducer(undefined, { type: 'FETCH_ANIME_FACTS' });
  expect(state).toEqual({
    animes: [],
  });
});

it('Fetch anime', () => {
  const state = animeReducer(undefined, { type: 'FETCH_ANIMES' });
  expect(state).toEqual({
    animes: [],
  });
});
