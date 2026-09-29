import { verifyToken } from "../token/token.js";
import UserModel from "../../model/user.model.js";
// AUTHENCATION MIDDELWARE FUNCTION 
export const authentication = () => {
    return async (request, response, next) => {
        try {
            const authorization = request.headers.authorization;
            if (!authorization) {
                response.status(401).json({
                    message: "Authorization header is required."
                });
                return;
            }
            if (!authorization.startsWith("Bearer ")) {
                response.status(401).json({
                    message: "Invalid token format."
                });
                return;
            }
            const token = authorization.split(" ")[1];
            if (!token) {
                response.status(401).json({
                    message: "Token is required."
                });
                return;
            }
            const decoded = verifyToken(token, process.env.USER_ACCESS_SECRET);
            const user = await UserModel.findById(decoded._id);
            if (!user) {
                response.status(401).json({
                    message: "User not found."
                });
                return;
            }
            request.user = user;
            // request.token = token;
            next();
        }
        catch (error) {
            console.log(error);
            response.status(500).json({
                message: "Internal Server Error"
            });
        }
    };
};
// AUTHORIZATION MIDDELWARE FUNCTION
export const authorization = (...roles) => {
    return (request, response, next) => {
        if (!request.user) {
            response.status(401).json({
                message: "Unauthorized access"
            });
            return;
        }
        if (!roles.includes(request.user.role)) {
            response.status(403).json({
                message: "You are not allowed to access this resource."
            });
            return;
        }
        next();
    };
};
