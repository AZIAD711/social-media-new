import { UserRequest } from "../../common/interface/user-request.interface.js";
import userService from "./user.service.js"
import { Request, Response } from "express";
// GET PROFILE
export const getProfileController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
       const userData = await userService.getProfile(user.id);
        return response.status(200).json({
            data : userData
        })
    } catch (error) {
        console.log("❌ ERROR IN GET PROFILE CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}
// UPDATE PROFILE
export const updateProfileController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
        const data = request.body
       const userData = await userService.updateProfile(user.id,data);
        return response.status(200).json({
            message:"User Profile Updated !",
            data : userData
        })
    } catch (error) {
        console.log("❌ ERROR IN UPDATED PROFILE CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}
// DELETE PROFILE
export const deleteProfileController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
       const userData = await userService.deleteProfile(user.id);
        return response.status(200).json({
            messsage:`Account of ${userData.firstName} is deleted `,
            data : userData
        })
    } catch (error) {
        console.log("❌ ERROR IN DELETE PROFILE CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}
// GET ALL USERS
export const getAllUsersController = async (request:Request, response:Response) => {
    try {
       const userData = await userService.getAllUsersProfile();
        return response.status(200).json({
            data : userData
        })
    } catch (error) {
        console.log("❌ ERROR IN GET ALL USERS CONTROLLER : ", error)
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}