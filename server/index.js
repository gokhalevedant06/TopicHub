const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const port = process.env.PORT || 5000;
const cors = require("cors");

const Chat = require("./models/chatSchema");
const Group = require("./models/groupSchema");

const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", async (data) => {
    const { value, teacherID, groupID, userID, userName } = data;
    console.log(data);
    const chats = await Chat.findOne({ $and: [{ teacherID }, { groupID }] });

    const messages = chats.messages;
    messages.push({
      sender: userID,
      name: userName,
      text: value,
      time: Date.now(),
    });

    const updated = await Chat.findByIdAndUpdate(chats._id, {
      messages,
    });

    console.log("Chats Updated");


    console.log("EMMITTING")
    socket.emit("chats", {
      messages,
    });
  });

  socket.on("getChats", async (data) => {
    const { teacherID, groupID } = data;
    console.log("BOTH IDS",teacherID,groupID)
    const chat = await Chat.findOne({ $and: [{ teacherID }, { groupID }] });

    console.log(teacherID);
    if (chat) {
      console.log("CHAT EXISTED");
      socket.emit("chats", {
        messages: chat.messages,
      });
    } else {
      const groupData = await Group.findById(groupID);
      const members = groupData.members;
      const messages = [];
      const newChat = new Chat({
        teacherID,
        groupID,
        members,
        messages,
      });
      const saved = await newChat.save();
      socket.emit("chat-saved", {
        message: saved ? "Chat Saved" : "Failed To Save Chat",
      });
    }
  });
});

app.use(cors());

//using middleware to parse json data
app.use(express.json());

require("./db/conn");
app.use("/teacher", require("./routes/teacherRoutes"));
app.use("/student", require("./routes/studentRoutes"));

// app.listen(port, () => {
//   console.log(`App listening on port http://localhost:${port}`);
// });
httpServer.listen(5000);
