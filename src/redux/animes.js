const FETCH_ANIMES = 'ANIMELOVER/ANIMES/FETCH';

const initialState = { Animes: [] };

export const fetchAnimes = (payload) => ({
  type: FETCH_ANIMES,
  payload,
});

const AnimeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ANIMES:
      return { animes: [...payload] };

    default:
      return state;
  }
};

export default AnimeReducer;
