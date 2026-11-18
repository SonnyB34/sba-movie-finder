import axios from 'axios';

const OMDB_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (req, res) => {
  try {
    const { title } = req.query;

    if (!title) {
      return res
        .status(400)
        .json({ error: 'Title query parameter is required' });
    }
    const response = await axios.get(OMDB_URL, {
      params: { s: title, apikey: process.env.OMDB_API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Search erorr:', error.message);
    res
      .status(500)
      .json({ error: 'Something went wrong getting movie details' });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(OMDB_URL, {
      params: { i: id, apikey: process.env.OMDB_API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Search error:', error.message);
    res
      .status(500)
      .json({ error: 'Something went wrong getting movie details' });
  }
};
