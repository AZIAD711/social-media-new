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
// LOGIN 
export const loginController = async (request, response) => {
    try {
        const data = request.body;
        const result = await authService.login(data);
        return response.status(200).json({
            message: "Login Sccuessfully",
            userData: result
        });
    }
    catch (error) {
        console.log("❌ ERROR IN LOGIN CONTROLLER:", error);
        response.status(500).json({
            message: "Internal Server Error !",
        });
    }
};
// FORGET PASSWORD 
export const forgetPasswordController = async (request, response) => {
    try {
        const data = request.body.email;
        const result = await authService.forgetPassword(data);
        return response.status(200).json({
            message: "Now you recieve Otp on your email",
        });
    }
    catch (error) {
        console.log("❌ ERROR IN FORGET PASSWORD CONTROLLER:", error);
        response.status(500).json({
            message: "Internal Server Error !",
        });
    }
};
// RESET PASSWORD 
export const resetPasswordController = async (request, response) => {
    try {
        const data = request.body;
        const result = await authService.resetPassword(data);
        return response.status(200).json({
            message: "Password Updated !",
            data: result
        });
    }
    catch (error) {
        console.log("❌ ERROR IN RESET PASSWORD CONTROLLER:", error);
        response.status(500).json({
            message: "Internal Server Error !",
        });
    }
};
