const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const assesmentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    totalMarks:{
        type:Number,
        default:100
    },
});

const Assesment = mongoose.model("ASSESMENT", assesmentSchema);

module.exports = Assesment;