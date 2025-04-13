import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './src/routes/userRoutes.js';
import { logger } from './src/middleware/logger.js';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
app.use(morgan('dev')); 
app.use(logger); 


app.use('/api', userRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the User Management API' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});