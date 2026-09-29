import jwt from "jsonwebtoken";
import { TokenTypeEnum } from "../enum/token-type.enum.js";
import { UserRoleEnum } from "../enum/user-role.enum.js";
// Generate Token
export const generateToken = ({ payload, secretKey, options = {
    expiresIn: "1h",
    notBefore: 0,
    audience: [],
    issuer: "social-media-demo",
}, }) => {
    return jwt.sign(payload, secretKey, options);
};
// Verify Token
export const verifyToken = (token, secretKey) => {
    return jwt.verify(token, secretKey);
};
// Decode Token
export const decodeToken = (token) => {
    return jwt.decode(token);
};
// Login Credentials
export const loginCredentials = (role) => {
    switch (role) {
        case UserRoleEnum.USER:
            return {
                [TokenTypeEnum.ACCESS]: process.env.USER_ACCESS_SECRET,
                [TokenTypeEnum.REFRESH]: process.env.USER_REFRESH_SECRET,
            };
        case UserRoleEnum.ADMIN:
            return {
                [TokenTypeEnum.ACCESS]: process.env.ADMIN_ACCESS_SECRET,
                [TokenTypeEnum.REFRESH]: process.env.ADMIN_REFRESH_SECRET,
            };
        default:
            throw new Error("Invalid role");
    }
};
