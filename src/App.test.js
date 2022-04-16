import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const renderWithRedux = (ui, { store } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('App', () => {
  it('renders without crashing', () => {
    const { getByText } = renderWithRedux(<App />, { store });
    const linkElement = getByText(/2022 AnimeWorld/i);
    expect(linkElement).toBeInTheDocument();
  });
});
