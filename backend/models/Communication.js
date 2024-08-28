import mongoose from "mongoose";

const communicationSchema = new mongoose.Schema({
    participants:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        },
    ],
    messages: [
    {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default:[]
    },
    ]
}, { timestamps: true })

const communication = mongoose.model("communication", communicationSchema)
export default communication