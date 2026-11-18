import 'dotenv/config.js';
import express from 'express';
import movieRoutes from './routes/movieRoutes.js';

const app = express();
const port = 3000;

app.use('/api', movieRoutes);

app.listen(port, (req, res) => {
  console.log(`Server running on port:${port}`);
});
