const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  createClass,
  getAllStudentsInClass,
  getClass,
  createSubject,
  createAssesment,
  getAllTeacher,
  addTeacherToClass
} = require("../controllers/teacher");
const { isTeacher } = require("../middlewares/isTeacher");


router.post("/signup", signup);
router.post("/login", login);
router.post("/createClass",isTeacher, createClass);
router.get("/getAllStudentsInClass",isTeacher, getAllStudentsInClass);
router.get('/getClass',isTeacher,getClass)
router.get('/getAllTeachers',isTeacher,getAllTeacher)
router.post('/createSubject',isTeacher,createSubject)
router.post('/createAssesment',isTeacher,createAssesment)
router.post('/addTeacherToClass',isTeacher,addTeacherToClass)
// router.get("/jwtVerify", jwtVerify);


module.exports = router;