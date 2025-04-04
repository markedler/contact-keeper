const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post("/", (req, res) => {
  res.send("Log in user");
});
// @route   PUT api/auth
// @desc    Update user details
// @access  Private
router.put("/", (req, res) => {
  res.send("Update user details");
});
// @route   DELETE api/auth
// @desc    Delete user
// @access  Private
router.delete("/", (req, res) => {
  res.send("Delete user");
});

module.exports = router;
