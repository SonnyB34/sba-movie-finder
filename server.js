import 'dotenv/config.js';
import express from 'express';
import movieRoutes from './routes/movieRoutes.js';

console.log('Key is:', process.env.OMDB_API_KEY);

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', movieRoutes);

app.listen(port, (req, res) => {
  console.log(`Server running on http://localhost:${port}`);
});
