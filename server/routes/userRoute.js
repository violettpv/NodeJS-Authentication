const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authentication");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;