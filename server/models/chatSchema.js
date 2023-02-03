const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const chatSchema = new mongoose.Schema(
  {
    teacherID:{
      type: Schema.Types.ObjectId,
      required:true,
    },
    groupID:{
      type: Schema.Types.ObjectId,
      required:true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    messages: [
      {
        sender: {
          type: Schema.Types.ObjectId,
        },
        name: {
          type: String,
        },
        text: {
          type: String,
        },
        time:{
          type: Date
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("CHAT", chatSchema);

module.exports = Chat;
