import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/admin.route.js';
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use('/api/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});