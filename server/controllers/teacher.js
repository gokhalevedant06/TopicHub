const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Teacher = require("../models/teacherSchema");
const Class = require("../models/classSchema");
const Subject = require("../models/subjectSchema");
const Assesment = require("../models/assesmentSchema");

const signup = async (req, res) => {
  var { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword || !phone)
    res.status(422).send("Enter all fields");
  try {
    const teacherExists = await Teacher.findOne({ email: email });
    if (teacherExists) {
      res.status(422).send("User with this email already exists");
    } else if (password !== cpassword) {
      res.status(422).send("Passwords do not match");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      password = hashedPassword;
      const teacher = new Teacher({ name, email, password, phone });
      const saveTeacher = await teacher.save();
      if (saveTeacher) res.status(200).send("Teacher created successfully");
    }
  } catch (error) {
    console.log("Error", error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(200)
        .send({ ok: false, message: "Email or password cannot be blank" });
    }
    const userLogin = await Teacher.findOne({ email: email }).populate('MyClass');
    if (userLogin) {
      const isValid = await bcrypt.compare(password, userLogin.password);
      if (!isValid) {
        res.status(200).json({ ok: false, message: "Incorrect Credentials" });
      } else {
        const token = jwt.sign(
          {
            _id: userLogin._id,
            name: userLogin.name,
          },
          process.env.JWT_PRIVATE_KEY,
          {
            expiresIn: "500m",
          }
        );
        return res
          .status(200)
          .json({ ok: true, message: "Login Successfull!", token, userLogin });
      }
    } else {
      res.status(200).send({ ok: false, message: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

// const jwtVerify = async (req, res) => {
//   const token = req.headers.authorization;
//   console.log(`token: ${token}`);
//   if (!token) {
//     return res.send(null);
//   }

//   const decodeToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
//   if (decodeToken) {
//     const user = await User.findById(decodeToken._id)
//       .populate("userRequest")
//       .populate({ path: "userRequest", populate: "hostId" });
//     return res.send({ user });
//   }
//   res.send(null);
// };

const createClass = async (req, res) => {
  const { title, description } = req.body;
  try {
    const classExists = await Class.findOne({ title });
    if (!classExists) {
      const newClass = new Class({
        title,
        description,
        createdBy: req.user._id,
      });
      const saveClass = await newClass.save();
      if (saveClass) {
        const updateTeacher = await Teacher.findByIdAndUpdate(req.user._id, {
          MyClass: saveClass._id,
        });
        if (updateTeacher)
          res.status(200).send({ ok: true, message: "Class created" });
      }
    } else {
      res.status(200).send({ ok: false, message: "Class Already Exists" });
    }
  } catch (error) {
    console.log(error);
  }
};

const createSubject = async (req, res) => {
  const { title, description, subjectTeacher } = req.body;
  const { MyClass } = req.user;
  try {
    const newSubject = new Subject({ title, description, subjectTeacher });
    if (newSubject) {
      const saveSubject = await newSubject.save();
      if (saveSubject) {
        const getClass = await Class.findById(MyClass);
        var subjects = [];
        if (getClass.subjects) {
          subjects = getClass.subjects;
        }
        subjects.push({ _id: saveSubject._id });
        const addToClass = await Class.findByIdAndUpdate(MyClass, { subjects });

        const getTeacher = await Teacher.findById(subjectTeacher);
        var myTeachings = [];
        if (getTeacher.myTeachings) {
          myTeachings = getTeacher.myTeachings;
        }
        myTeachings.push({ _id: saveSubject._id });

        const updateTeacherDetails = await Teacher.findByIdAndUpdate(
          subjectTeacher,
          { myTeachings }
        );

        if (updateTeacherDetails && addToClass)
          res.status(200).send({ ok: true, message: "Subject created" });
        else {
          res
            .status(200)
            .send({ ok: false, message: "Failed To create subject" });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllStudentsInClass = async (req, res) => {
  const { MyClass } = req.user;
  try {
    const getClass = await Class.findById(MyClass).populate({
      path : 'studentsJoined',
      populate : {
        path : 'groupDetails.groupID'
      }
    })
    if (getClass.studentsJoined)
      res.status(200).send({
        ok: true,
        message: "Student List",
        studentsJoined: getClass.studentsJoined,
      });
    else
      res.status(200).send({ ok: false, message: "Please Create Class First" });
  } catch (error) {
    console.log(error);
  }
};

const getClass = async (req, res) => {
  const { MyClass } = req.user;
  try {
    //add populations here
    const classDetails = await Class.findById(MyClass).populate(
      "studentsJoined"
    ).populate("teachers").populate({
      path : 'subjects',
      populate : {
        path : 'subjectTeacher'
      }
    }).populate({
      path : 'groups',
      populate : {
        path : 'groupLeader'
      },
    }).populate({
      path : 'groups',
      populate:{
        path:'members'
      }
      
    })
   
    if (classDetails)
      res
        .status(200)
        .send({ ok: true, message: "Class Information", classDetails });
    else {
      res.status(200).send({ ok: false, message: "Class NOT Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const createAssesment = async (req, res) => {
  const { title, description, forSubject, totalMarks, classID } = req.body;
  try {
    const allGroups = await Class.findById(classID);
    if (allGroups) {
      const appearingGroupDetails = []
      for(var grpID of allGroups.groups){
        appearingGroupDetails.push({groupID:grpID})
      }
      const newAssesment = new Assesment({
        title,
        description,
        forSubject,
        totalMarks,
        appearingGroupDetails
      });
      const saveAssesment = await newAssesment.save();
      const thisSubject = await Subject.findById(forSubject);
      var assesments = [];
      if (thisSubject.assesments) {
        assesments = thisSubject.assesments;
      }
      assesments.push({ _id: saveAssesment._id });

      const updateSubject = await Subject.findByIdAndUpdate(forSubject, {
        assesments,
      });

      if (saveAssesment && updateSubject)
        res.status(200).send({ ok: true, message: "Assesment Created" });
    } else
      res.status(200).send({ ok: false, message: "Error creating Assesment" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signup,
  login,
  // jwtVerify,
  createClass,
  getAllStudentsInClass,
  getClass,
  createSubject,
  createAssesment,
};
