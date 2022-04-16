const FETCH_FACT = 'ANIMELOVER/FACT/FETCH';

const initialState = { animes: [] };

export const fetchFact = (payload) => ({
  type: FETCH_FACT,
  payload,
});

const factReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FACT:
      return { facts: [...payload] };

    default:
      return state;
  }
};

export default factReducer;
