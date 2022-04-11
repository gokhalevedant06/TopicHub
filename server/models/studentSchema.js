const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  joinedClassID: {
    type: Schema.Types.ObjectId,
    ref: "CLASS",
  },
  groupDetails: {
    isLeader: {
      type: Boolean,
      default:false
    },
    groupID: {
      type: Schema.Types.ObjectId,
      ref: "GROUP",
    },
  },
  profilePhoto: {
    type: String,
  },
});

const Student = mongoose.model("STUDENT", studentSchema);

module.exports = Student;
