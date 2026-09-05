import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/chandni_portfolio';

// Middlewares
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:3000',
      'http://localhost:4173',
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date(),
    database:
      mongoose.connection.readyState === 1
        ? 'connected'
        : 'disconnected/fallback-mode',
  });
});

// API Routes
app.use('/api/contact', contactRoutes);

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

// Connect to MongoDB & Start Server
const startServer = async () => {
  try {
    console.log('[Database] Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 4000,
    });
    console.log('✅ [Database] MongoDB connected successfully to:', MONGO_URI);
  } catch (error) {
    console.warn(
      '⚠️  [Database] MongoDB connection failed or not running locally:',
      error.message
    );
    console.warn(
      'ℹ️  [Database] Server running with in-memory fallback. You can connect a local or MongoDB Atlas cluster by updating MONGO_URI in server/.env.'
    );
  }

  app.listen(PORT, () => {
    console.log(`🚀 [Server] Backend server running on http://localhost:${PORT}`);
  });
};

startServer();
