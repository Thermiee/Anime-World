import { fetchAnimes } from './anime';

const fetchAnimeThunk = () => async (dispatch) => {
  try {
    const response = await
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/').then(
      (data) => data.json(),
    );

    const payload = response.data.map((anime) => ({
      name: anime.anime_name,
      image: anime.anime_img,
    }));

    dispatch(fetchAnimes(payload));
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchAnimeThunk;
