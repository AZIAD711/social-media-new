import { UserRequest } from "../../common/interface/user-request.interface.js";
import userService from "./user.service.js"
import { Request, Response } from "express";
// GET PROFILE
export const getProfileController = async (request:Request, response:Response) => {
    try {
        const { user } = request as UserRequest;
       const userData = await userService.getProfile(user.id);
       console.log("request.user =", (request as UserRequest).user);
        return response.status(200).json({
            data : userData
        })
    } catch (error) {
        console.log("❌ ERROR IN GET PROFILE CONTROLLER : ", error)
        // console.log("request.user =", (request as UserRequest).user);
        return response.status(500).json({
            errorMessage:"Internal Server Error !"
        })
    }
}