const router = require('express').Router();

const { register, login, getUser, getCurrentUser, getAllUsers } = require('../controller/Auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register', register);
router.post('/login', login);
router.get('/user', authMiddleware, getUser);
router.get('/me', authMiddleware, getCurrentUser);
router.get('/users', authMiddleware, getAllUsers);

module.exports = router;