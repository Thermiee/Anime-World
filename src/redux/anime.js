const FETCH_ANIMES = 'ANIMELOVER/ANIMES/FETCH';

const initialState = { animes: [] };

export const fetchAnimes = (payload) => ({
  type: FETCH_ANIMES,
  payload,
});

const animeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ANIMES:
      return { animes: [...payload] };

    default:
      return state;
  }
};

export default animeReducer;
