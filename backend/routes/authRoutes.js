const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController.js');

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", Protect, admin, getUsers);