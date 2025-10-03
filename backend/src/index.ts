import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import routes from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use('/api', routes);

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/money-lover';
connectDB(mongoUri);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});