import { model, Schema } from "mongoose";
import { ReactEnum } from "../common/enum/react.enum.js";
import { IPost } from "../common/interface/post.interface.js";

const noData = "No data provided!";

// POST SCHEMA
const postSchema = new Schema(
  {
    // TITLE 
    title : {
        type : String,
        minLength:1,
        maxLength:30,
        require:true,
        unique:true
    },
    // CONTENT 
    conent : {
        type : String,
        minLength:2,
        maxLength:200,
        require:true
    },
    // IMAGE 
    image : {
        type : String,
        default:noData
    },
    // REACTION 
    react: {
        type : String,
        enum : Object.values(ReactEnum)
    },

  },
  {
    strict: true,
    strictQuery: true,
    timestamps: true,
    collection: "post_data",
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
    versionKey: "version",
  }
);


const postModel = model<IPost>("Post", postSchema);

export default postModel;