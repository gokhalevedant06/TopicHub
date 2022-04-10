const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  createClass
} = require("../controllers/teacher");
const { isTeacher } = require("../middlewares/isTeacher");

// const { isHost } = require("../middlewares/isHost");

router.post("/signup", signup);
router.post("/login", login);
router.post("/createClass",isTeacher, createClass);
// router.get("/jwtVerify", jwtVerify);


module.exports = router;