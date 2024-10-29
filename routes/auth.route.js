const express = require("express");
const {
  checkUSNAndSendOTP,
  verifyOTP,
  signup,
  login,
  logout,
} = require("../controllers/auth.controller");
const router = express.Router();

router.post("/check-usn", checkUSNAndSendOTP);
router.post("/verfiy-usn", verifyOTP);

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
// router.post("/reset-password");
// router.patch("/update-password");

router.get("/google");
router.get("/google/callback");

router.get("/github");
router.get("/github/callback");

module.exports = router;
