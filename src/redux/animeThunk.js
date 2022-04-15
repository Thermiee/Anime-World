import { fetchAnimes } from './animes';

const fetchAnimeThunk = () => async (dispatch) => {
  try {
    const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/').then(
      (data) => data.json(),
    );

    const payload = response.data;
    dispatch(fetchAnimes(payload));
  } catch (error) {
    console.log(error);
  }
};

export default fetchAnimeThunk;
