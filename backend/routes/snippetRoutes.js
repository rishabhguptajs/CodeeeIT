import express from 'express';
import { getSnippets, addSnippet, updateSnippet, deleteSnippet } from '../controllers/snippetController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getSnippets);
router.post('/', protect, addSnippet);
router.put('/:id', protect, updateSnippet);
router.delete('/:id', protect, deleteSnippet);

export default router;
