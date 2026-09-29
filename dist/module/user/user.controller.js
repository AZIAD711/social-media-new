import userService from "./user.service.js";
// GET PROFILE
export const getProfileController = async (request, response) => {
    try {
        const { user } = request;
        const userData = await userService.getProfile(user.id);
        console.log("request.user =", request.user);
        return response.status(200).json({
            data: userData
        });
    }
    catch (error) {
        console.log("❌ ERROR IN GET PROFILE CONTROLLER : ", error);
        return response.status(500).json({
            errorMessage: "Internal Server Error !"
        });
    }
};
// UPDATE PROFILE
export const updateProfileController = async (request, response) => {
    try {
        const { user } = request;
        const data = request.body;
        const userData = await userService.updateProfile(user.id, data);
        console.log("request.user =", request.user);
        return response.status(200).json({
            message: "User Profile Updated !",
            data: userData
        });
    }
    catch (error) {
        console.log("❌ ERROR IN UPDATED PROFILE CONTROLLER : ", error);
        return response.status(500).json({
            errorMessage: "Internal Server Error !"
        });
    }
};
