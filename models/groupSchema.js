const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const groupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    groupLeader:{
        type: Schema.Types.ObjectId,
        ref: "STUDENT",
        required:true
    },
    members:[
        {
            type: Schema.Types.ObjectId,
            ref: "STUDENT",
        }
    ],
    chat:{
        type:String,
    }
});

const Group = mongoose.model("GROUP", groupSchema);

module.exports = Group;