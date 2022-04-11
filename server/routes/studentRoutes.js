const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  joinClass,
  getAllStudentsInClass,
  createGroup
} = require("../controllers/student");

const { isStudent } = require("../middlewares/isStudent");



router.post("/signup", signup);
router.post("/login", login);
// router.get("/jwtVerify", jwtVerify);
router.post("/joinClass",isStudent, joinClass);
router.get('/getAllStudentsInClass',isStudent,getAllStudentsInClass)
router.post('/createGroup',isStudent,createGroup)
module.exports = router;