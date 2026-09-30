import { model, Schema, Types } from "mongoose";
// COMMENT SCHEMA
const commentSchema = new Schema({
    // CONTENT 
    conent: {
        type: String,
        minLength: 2,
        maxLength: 200,
        require: true
    },
    // OWNER ID 
    ownerId: {
        type: Types.ObjectId,
        ref: "User",
        require: true
    },
    // POST ID 
    postId: {
        type: Types.ObjectId,
        ref: "Post",
        require: true
    },
}, {
    strict: true,
    strictQuery: true,
    timestamps: true,
    collection: "comment_data",
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
    versionKey: "version",
});
const commentModel = model("Comment", commentSchema);
export default commentModel;
