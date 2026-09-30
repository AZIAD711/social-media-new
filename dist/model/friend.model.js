import { model, Schema, Types } from "mongoose";
import { string } from "zod";
import { statusOfRequestEnnum } from "../common/enum/status-of-request.enum.js";
// FRIEND SCHEMA
const friendSchema = new Schema({
    // REQUESTER 
    requesterId: {
        type: Types.ObjectId,
        ref: "User",
        require: true
    },
    // RECIEVER
    recieverId: {
        type: Types.ObjectId,
        ref: "User",
        require: true
    },
    // STATUS
    statusOfRequest: {
        type: string,
        enum: Object.values(statusOfRequestEnnum)
    },
}, {
    strict: true,
    strictQuery: true,
    timestamps: true,
    collection: "friend_data",
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
    versionKey: "version",
});
const friendModel = model("Friend", friendSchema);
export default friendModel;
