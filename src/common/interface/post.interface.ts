import { Types } from "mongoose"
import { ReactEnum } from "../enum/react.enum.js"
export interface IPost {
    // POST ID
    _id : Types.ObjectId | string
    // OWNER ID
    ownerId : Types.ObjectId | string
    // TITLE
    title : string ,
    // CONTENT 
    content : string,
    // IMAGE 
    image: string,
    // REACT
    react : ReactEnum
}