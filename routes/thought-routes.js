// Import required packages
const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../controllers/thought-controller');

// Thought routes
// GET all thoughts, POST new thought
router.route('/').get(getAllThoughts).post(createThought);

// GET, PUT, DELETE thought by ID
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// Reaction routes
// POST to add a reaction, DELETE to remove a reaction
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router; 