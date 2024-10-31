const express = require("express");
const {
  checkUSNAndSendOTP,
  verifyOTP,
  signup,
  login,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth.controller");
const router = express.Router();

router.post("/check-usn", checkUSNAndSendOTP);
router.post("/verfiy-usn", verifyOTP);

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.patch("/reset-password", resetPassword);

router.get("/google");
router.get("/google/callback");

router.get("/github");
router.get("/github/callback");

module.exports = router;
