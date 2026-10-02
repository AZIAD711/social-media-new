import { UserRequest } from "../../common/interface/user-request.interface.js";
import friendService from "./friend.service.js"
import { Request, Response } from "express";
// SEND REQUEST
export const sendRequestController = async (request: Request, response: Response) => {
    try {
        const { user } = request as UserRequest;
        const userId = request.params.id as string;

        const result = await friendService.sendRequest(user.id, userId);

        const friendName = await result.populate({
            path: "recieverId",
            select: "firstName"
        });

        const receiver = friendName.recieverId as unknown as {
            firstName: string;
        };

        return response.status(201).json({
            message: `Request Sent to ${receiver.firstName} Successfully!`,
        });

    } catch (error) {
        console.log("❌ ERROR IN SEND REQUEST CONTROLLER : ", error);

        return response.status(500).json({
            errorMessage: "Internal Server Error!"
        });
    }
};
