const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Student = require("../models/studentSchema");
const Class = require("../models/classSchema");


const signup = async (req, res) => {
  var { name, email,phone, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword || !phone)
    res.status(422).send("Enter all fields");
  try {
    const studentExists = await Student.findOne({ email: email });
    if (studentExists) {
      res.status(422).send("User with this email already exists");
    } else if (password !== cpassword) {
      res.status(422).send("Passwords do not match");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      password = hashedPassword;
      const student = new Student({ name, email, password, phone });
      const saveStudent = await student.save();
      if (saveStudent) res.status(200).send("Student created successfully");
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
    const userLogin = await Student.findOne({ email: email });
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
          .json({ ok: true, message: "Login Successfull!", token,  userLogin });
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

const joinClass = async (req,res)=>{
  const {classID} = req.body;
  try {
    // add student to class 
    // add class to student schema
    const getClass = await Class.findById(classID);
    var studentsJoined = [];
    if (getClass.studentsJoined) {
      studentsJoined = getClass.studentsJoined;
    }
    studentsJoined.push({ _id: req.user._id });
    const getStudent = await Student.findByIdAndUpdate(req.user._id,{joinedClassID:classID});
    const updateClass = await Class.findByIdAndUpdate(classID,{studentsJoined})
    if(getStudent && updateClass)  res.status(200).send({ ok: true, message: "Student Added to Class" });
    else{
      res.status(200).send({ ok: false, message: "Failed to add to class" });
    }
  } catch (error) {
    
  }
}

module.exports = {
    signup,
    login,
    // jwtVerify,
    joinClass
  };