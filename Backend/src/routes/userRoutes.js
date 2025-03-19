const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get user data
router.get('/', userController.getUser);

module.exports = router;
