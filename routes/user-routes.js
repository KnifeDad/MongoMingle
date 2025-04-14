// Import required packages
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../controllers/user-controller');

// User routes
// GET all users
router.route('/').get(getAllUsers).post(createUser);

// GET, PUT, DELETE user by ID
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Friend routes
// POST to add a friend, DELETE to remove a friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router; 