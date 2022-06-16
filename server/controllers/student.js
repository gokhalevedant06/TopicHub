const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Student = require("../models/studentSchema");
const Class = require("../models/classSchema");
const Group = require("../models/groupSchema");

const signup = async (req, res) => {
  var { name, email, phone, password, cpassword } = req.body;
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
    const userLogin = await Student.findOne({ email: email }).populate('joinedClassID').populate("groupDetails.groupID");
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

const jwtVerify = async (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.send(null);
  }

  const decodeToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  if (decodeToken) {
    const user = await Student.findById(decodeToken._id).populate('joinedClassID').populate("groupDetails")
    return res.send({ user });
  }
  res.send(null);
};

const joinClass = async (req, res) => {
  const { classID } = req.body;
  try {
    // add student to class
    // add class to student schema
    const getClass = await Class.findById(classID);
    var studentsJoined = [];
    if (getClass.studentsJoined) {
      studentsJoined = getClass.studentsJoined;
    }
    studentsJoined.push({ _id: req.user._id });
    const getStudent = await Student.findByIdAndUpdate(req.user._id, {
      joinedClassID: classID,
    });
    const updateClass = await Class.findByIdAndUpdate(classID, {
      studentsJoined,
    });
    if (getStudent && updateClass)
      res.status(200).send({ ok: true, message: "Student Added to Class" });
    else {
      res.status(200).send({ ok: false, message: "Failed to add to class" });
    }
  } catch (error) {}
};

const getAllStudentsInClass = async (req, res) => {
  const { joinedClassID } = req.user;
  try {
    console.log(joinedClassID);
    const getClass = await Class.findById(joinedClassID);
    if (getClass.studentsJoined)
      res
        .status(200)
        .send({
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

const createGroup = async (req, res) => {
  const { name } = req.body;
  const { _id, joinedClassID } = req.user;
  try {
    const newGroup = new Group({ name, groupLeader: _id });
    if (newGroup) {
      const savedGroup = await newGroup.save();
      if (savedGroup) {
        const groupDetails = {
          isLeader: true,
          groupID: savedGroup._id,
        };
        const leader = await Student.findByIdAndUpdate(_id, { groupDetails });

        const getClass = await Class.findById(joinedClassID);
        var groups = [];
        if (getClass.groups) {
          groups = getClass.groups;
        }
        groups.push({ _id: savedGroup._id });

        const updateClass = await Class.findByIdAndUpdate(joinedClassID, {
          groups,
        });

        var members = [];
        if (savedGroup.members) {
          members = savedGroup.members;
        }
        members.push({ _id });
        const updateGroupDetails = await Group.findByIdAndUpdate(savedGroup._id,{members})

        if (leader && updateClass && updateGroupDetails)
          res.status(200).send({ ok: true, message: "Group Created" });
        else {
          res
            .status(200)
            .send({ ok: false, message: "Failed to create Group" });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const joinGroup = async (req,res)=>{
  const {groupID} = req.body;
  const {_id} = req.user;
  console.log(groupID)
  try {
    const getGroup = await Group.findById(groupID)
    var members = [];
        if (getGroup.members) {
          members = getGroup.members;
        }
        members.push({ _id});
    const updateGroupDetails = await Group.findByIdAndUpdate(groupID,{members})
    const getStudent = await Student.findByIdAndUpdate(_id,{groupDetails:{groupID,isLeader:false}})

  if(updateGroupDetails && getStudent) res.status(200).send({ ok: true, message: "Group Joined" });
  else res.status(200).send({ ok: false, message: "Failed to join Group" });
  } catch (error) {
    console.log(error)
  }
}

const getGroupDetails = async(req,res)=>{
  const {groupDetails} = req.user
    try {
        const groupData = await Group.findById(groupDetails.groupID).populate('groupLeader').populate('members')
        res.status(200).send({ ok: true, groupData});
    } catch (error) {
      console.log(error)
    }
}

module.exports = {
  signup,
  login,
  jwtVerify,
  joinClass,
  getAllStudentsInClass,
  createGroup,
  joinGroup,
  getGroupDetails
};
