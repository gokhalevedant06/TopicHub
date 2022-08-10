var jwt = require("jsonwebtoken");
const Teacher = require("../models/teacherSchema");

const isTeacher = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Access Denied, No token provided");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    const rootUser = await Teacher.findById(decoded._id);
    if (rootUser) {
      req.user = rootUser;
      next();
    }
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = {isTeacher}
