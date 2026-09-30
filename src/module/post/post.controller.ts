import { UserRequest } from "../../common/interface/user-request.interface.js";
import postService from "./post.service.js"
import { Request, Response } from "express";
// CREATE POST
export const createPostController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
        const data = request.body
       const result = await postService.createPost(data,user.id);
        return response.status(201).json({
            message : "Post Created",
            data : result
        })
    } catch (error) {
        console.log("❌ ERROR IN CREATE POST CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}
// GET ONE POST
export const getOnePostController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
        const postId = request.params.id as string
       const result = await postService.getOnePost(postId,user.id);
        return response.status(200).json({
            message : "One Post Getted",
            data : result
        })
    } catch (error) {
        console.log("❌ ERROR IN GET ONE POST CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}
// GET MANY POST
export const getManyPostController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
       const result = await postService.getManyPost(user.id);
        return response.status(200).json({
            message : "Many Posts Getted",
            data : result
        })
    } catch (error) {
        console.log("❌ ERROR IN GET MANY POST CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}
// UPDATE POST 
export const updatePostController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
        const data = request.body;
        const postId = request.params.id as string
       const result = await postService.updatePost(data,postId,user.id);
        return response.status(200).json({
            message : "Post Updated",
            data : result
        })
    } catch (error) {
        console.log("❌ ERROR IN UPDATE POST CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}
// DELETE POST 
export const deletePostController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
        const postId = request.params.id as string
       const result = await postService.deletePost(postId,user.id);
        return response.status(200).json({
            message : "Post Deleted !",
            data : result
        })
    } catch (error) {
        console.log("❌ ERROR IN DELETE POST CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}