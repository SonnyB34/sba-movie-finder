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
      params: { s: title, apikey: process.env.OMBD_API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Something went wrong getting movie details' });
  }
};

export const getMovieDetails = async (req, res) => {};
