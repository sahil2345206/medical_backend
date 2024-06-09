import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// CORS options
const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true
};

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/medical', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// Start server
app.listen(port, () => {
    console.log('Server listening on port', port);
});