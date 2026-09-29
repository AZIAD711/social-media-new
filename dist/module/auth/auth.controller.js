import authService from "./auth.service.js";
// SIGN UP 
export const signupController = async (request, response) => {
    try {
        const data = request.body;
        const result = await authService.signup(data);
        return response.status(201).json({
            message: "User Account Created",
            userData: result
        });
    }
    catch (error) {
        console.log("❌ ERROR IN SIGN UP CONTROLLER:", error);
        response.status(500).json({
            message: "Internal Server Error !",
        });
    }
};
