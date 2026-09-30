import { model, Schema, Types } from "mongoose";
import { ReactEnum } from "../common/enum/react.enum.js";
import { IPost } from "../common/interface/post.interface.js";
import { IComment } from "../common/interface/comment.interface.js";
// COMMENT SCHEMA
const commentSchema = new Schema(
  {
    // CONTENT 
    content : {
        type : String,
        minLength:2,
        maxLength:200,
        require:true
    },
    // OWNER ID 
    ownerId : {
        type : Types.ObjectId,
        ref:"User",
        require:true
    },
    // POST ID 
    postId : {
        type : Types.ObjectId,
        ref:"Post",
        require:true
    },

  },
  {
    strict: true,
    strictQuery: true,
    timestamps: true,
    collection: "comment_data",
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
    versionKey: "version",
  }
);


const commentModel = model<IComment>("Comment", commentSchema);

export default commentModel;