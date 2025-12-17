// import modules --------------------------------------------->
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import errorMiddleware from './middlewares/error.handle.middleware.js';
import authRoutes from './routes/auth.routes.js';

// create app ------------------------------------------------->
const app = express();

// cors middlware --------------------------------------------->
app.use(cors({ origin: process.env.CORS, credentials: true }));

// middlware -------------------------------------------------->
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// route middleware ------------------------------------------->
app.use('/api/v1/auth', authRoutes);

// global error middleware ------------------------------------>
app.use(errorMiddleware);

// export modules --------------------------------------------->
export default app;
