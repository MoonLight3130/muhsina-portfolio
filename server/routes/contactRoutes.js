import express from 'express';
import {
  createContactMessage,
  getContactMessages,
} from '../controllers/contactController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route to submit contact form
router.post('/', createContactMessage);

// Protected route to read submissions
router.get('/', protectAdmin, getContactMessages);

export default router;
