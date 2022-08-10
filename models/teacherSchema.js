const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    isTeacher:{
        type:Boolean,
        default:true
    },
    MyClass:{
        type: Schema.Types.ObjectId,
        ref: "CLASS",
    },
    myTeachings:[
        {
            type: Schema.Types.ObjectId,
            ref: "SUBJECT",
        }
    ],
    profilePhoto:{
        type:String
    }
});

const Teacher = mongoose.model("TEACHER", teacherSchema);

module.exports = Teacher;