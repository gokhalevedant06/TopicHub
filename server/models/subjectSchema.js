const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const subjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assesments: [
    {
      type: Schema.Types.ObjectId,
      ref: "ASSESMENT",
    },
  ],
  subjectTeacher: {
    type: Schema.Types.ObjectId,
    ref: "REACHER",
  },
});

const Subject = mongoose.model("SUBJECT", subjectSchema);

module.exports = Subject;
