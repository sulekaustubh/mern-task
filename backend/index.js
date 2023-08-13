// all the imports
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import allRoutes from './routes/index.js';

// invoke express and run an instance using variable
const app = express();
// default port or pick from .env
const PORT = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api', allRoutes);

// error handler
// eslint-disable-next-line
app.use((err, req, res, next) => {
	const status = err.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	return res.status(status).json({ message, stack: err.stack });
});

// async function to connect with MongoDB
const connectDB = async () => {
	try {
		// mongoose helps in enforcing schema at app layer
		// mongoose.connect() is an inbuilt method that simplies connecting with MongoDB using a connection string
		await mongoose.connect(process.env.DB_CONNECTION_STRING);
		console.log('MongoDB Connected');
  }
  catch (err) {
    console.log(err);
    // force termination if any errors occur
		process.exit(1);
	}
};

// main entry point
app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port ${PORT}`);
});
