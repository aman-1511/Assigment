import express from 'express';
import { generatePersonalizedMessage } from '../controllers/messageController';

const router = express.Router();

// POST to generate a personalized message
router.post('/', generatePersonalizedMessage);

export default router; 