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
    forSubject:{
        type: Schema.Types.ObjectId,
        ref: "SUBJECT",
        required:true
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "TEACHER",
    },
    appearingGroupDetails:[
        {
            groupID:{
                type: Schema.Types.ObjectId,
                ref: "GROUP",
            },
            topic:{
                name:{
                    type:String
                },
                isApproved:{
                    type:Boolean,
                    default:false
                },
                isRejected:{
                    type:Boolean,
                    default:false
                }
            },
            marking:[
                {
                    groupMember:{
                        type: Schema.Types.ObjectId,
                        ref: "STUDENT",
                    },
                    marksReceived:{
                        type:Number,
                        default:0
                    }
                }
            ]

        }
    ],
    totalMarks:{
        type:Number,
        default:100
    },
});

const Assesment = mongoose.model("ASSESMENT", assesmentSchema);

module.exports = Assesment;