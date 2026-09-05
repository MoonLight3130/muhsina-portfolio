import ContactMessage from '../models/ContactMessage.js';
import mongoose from 'mongoose';

// In-memory fallback store in case MongoDB is temporarily unreachable in dev
const memoryStore = [];

/**
 * @desc    Submit a new contact message
 * @route   POST /api/contact
 * @access  Public
 */
export const createContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Manual input validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required.',
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    if (!subject || !subject.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Subject is required.',
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message is required.',
      });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters long.',
      });
    }

    const newContactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date(),
    };

    let savedMessage = null;

    // If MongoDB is connected (readyState 1 = connected)
    if (mongoose.connection.readyState === 1) {
      const contactDoc = new ContactMessage(newContactData);
      savedMessage = await contactDoc.save();
    } else {
      // Graceful fallback to memory store if Mongo is not connected locally
      const mockId = 'mem_' + Date.now();
      savedMessage = { _id: mockId, ...newContactData, storageMode: 'in-memory' };
      memoryStore.push(savedMessage);
      console.warn('[ContactController] Saved message to memory cache (MongoDB not connected).');
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been sent successfully.',
      data: {
        id: savedMessage._id,
        name: savedMessage.name,
        email: savedMessage.email,
        subject: savedMessage.subject,
        createdAt: savedMessage.createdAt,
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', '),
      });
    }
    next(error);
  }
};

/**
 * @desc    Get all submitted contact messages (Admin only)
 * @route   GET /api/contact
 * @access  Private / Protected
 */
export const getContactMessages = async (req, res, next) => {
  try {
    let messages = [];

    if (mongoose.connection.readyState === 1) {
      messages = await ContactMessage.find({}).sort({ createdAt: -1 });
    } else {
      messages = [...memoryStore].reverse();
    }

    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};
