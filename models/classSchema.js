const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const classSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    studentsJoined:[{
        type: Schema.Types.ObjectId,
        ref: "STUDENT",
    }],
    subjects:[
        {
            type: Schema.Types.ObjectId,
            ref: "SUBJECT",
        }
    ],
    groups:[
        {
            type: Schema.Types.ObjectId,
            ref: "GROUP",
        }
    ],
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "TEACHER",
    },
    teachers:[
        {
            type: Schema.Types.ObjectId,
            ref: "TEACHER",
        }
    ]

});

const Class = mongoose.model("CLASS", classSchema);

module.exports = Class;