const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/adminAuth');
const { 
  setupAdmin, 
  checkAdmin, 
  getAllUsers,
  getDashboardStats,
  getExamActivity,
  getUserRoleDistribution,
  getPassRates,
  getUserGrowth,
  getTopExams
} = require('../controller/Admin.controller');
const auth = require('../middleware/auth');

// @route   POST /api/admin/setup
// @desc    Create admin account (one-time setup)
// @access  Public
router.post('/setup', setupAdmin);

// @route   GET /api/admin/check
// @desc    Check if user is admin
// @access  Private
router.get('/check', auth, checkAdmin);

// All other admin routes should be protected
router.use(auth, isAdmin);

// @route   GET /api/admin/users
// @desc    Get all registered users
// @access  Private (Admin)
router.get('/users', getAllUsers);

// @route   GET /api/admin/stats
// @desc    Get dashboard statistics
// @access  Private (Admin)
router.get('/stats', getDashboardStats);

// @route   GET /api/admin/exam-activity
// @desc    Get exam activity data
// @access  Private (Admin)
router.get('/exam-activity', getExamActivity);

// @route   GET /api/admin/user-roles
// @desc    Get user role distribution
// @access  Private (Admin)
router.get('/user-roles', getUserRoleDistribution);

// @route   GET /api/admin/pass-rates
// @desc    Get pass rates by exam category
// @access  Private (Admin)
router.get('/pass-rates', getPassRates);

// @route   GET /api/admin/user-growth
// @desc    Get user growth over time
// @access  Private (Admin)
router.get('/user-growth', getUserGrowth);

// @route   GET /api/admin/top-exams
// @desc    Get top exams by participation
// @access  Private (Admin)
router.get('/top-exams', getTopExams);

module.exports = router; 