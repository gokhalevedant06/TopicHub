const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  jwtVerify,
  joinClass,
  getAllStudentsInClass,
  createGroup,
  joinGroup
} = require("../controllers/student");

const { isStudent } = require("../middlewares/isStudent");



router.post("/signup", signup);
router.post("/login", login);
router.get("/jwtVerify", jwtVerify);
router.post("/joinClass",isStudent, joinClass);
router.get('/getAllStudentsInClass',isStudent,getAllStudentsInClass)
router.post('/createGroup',isStudent,createGroup)
router.post('/joinGroup',isStudent,joinGroup)
module.exports = router;