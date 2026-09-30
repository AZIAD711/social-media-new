import { UserRequest } from "../../common/interface/user-request.interface.js";
import postService from "./post.service.js"
import { Request, Response } from "express";
// CREATE POST
export const createPostController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
        const data = request.body
       const userData = await postService.createPost(data,user.id);
        return response.status(201).json({
            message : "Post Created",
            data : userData
        })
    } catch (error) {
        console.log("❌ ERROR IN CREATE POST CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}