const express = require("express");
const router = express.Router();
const {
  signup,
  login
} = require("../controllers/teacher");

// const { isHost } = require("../middlewares/isHost");

router.post("/signup", signup);
router.post("/login", login);
// router.get("/jwtVerify", jwtVerify);


module.exports = router;