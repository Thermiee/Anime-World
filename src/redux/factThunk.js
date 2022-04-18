const fetchAnimeFact = async (name) => {
  try {
    const api = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${name}`);
    const response = await api.json();
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchAnimeFact;
