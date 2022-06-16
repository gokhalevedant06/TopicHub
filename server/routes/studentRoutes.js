const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  jwtVerify,
  joinClass,
  getAllStudentsInClass,
  createGroup,
  joinGroup,
  getGroupDetails,
  getSubjectsInClass
} = require("../controllers/student");

const { isStudent } = require("../middlewares/isStudent");



router.post("/signup", signup);
router.post("/login", login);
router.get("/jwtVerify", jwtVerify);
router.post("/joinClass",isStudent, joinClass);
router.get('/getAllStudentsInClass',isStudent,getAllStudentsInClass)
router.post('/createGroup',isStudent,createGroup)
router.post('/joinGroup',isStudent,joinGroup)
router.get('/groupDetails',isStudent,getGroupDetails)
router.get('/getSubjects',isStudent,getSubjectsInClass)
module.exports = router;