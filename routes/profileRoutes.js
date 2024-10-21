const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');

// Get user profile
router.get('/', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching profile' });
    }
});

// Update user profile
router.put('/', authenticate, async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findByIdAndUpdate(req.user.userId, updates, { new: true });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error updating profile' });
    }
});

// Delete user profile
router.delete('/', authenticate, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.userId);
        res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting profile' });
    }
});

module.exports = router;
