const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  joinClass
} = require("../controllers/student");

const { isStudent } = require("../middlewares/isStudent");



router.post("/signup", signup);
router.post("/login", login);
router.post("/joinClass",isStudent, joinClass);
// router.get("/jwtVerify", jwtVerify);


module.exports = router;