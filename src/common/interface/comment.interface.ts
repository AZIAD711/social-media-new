import { Types } from "mongoose"

export interface IComment {
    // COMMENT ID
    _id : Types.ObjectId | string,
    // OWNER ID
    ownerId : Types.ObjectId | string,
    // POST ID
    postId : Types.ObjectId | string,
    // CONTENT 
    content : string,

}