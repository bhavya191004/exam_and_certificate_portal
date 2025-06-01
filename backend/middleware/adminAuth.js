const User = require('../models/User');

// Middleware to check if user is admin
exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if user is Bhavya (the admin)
    if (user.email !== 'bhavya@gmail.com') {
      return res.status(403).json({ msg: 'Access denied. Admin only.' });
    }

    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}; 