import jwt from "jsonwebtoken";
import { TokenTypeEnum } from "../enum/token-type.enum.js";
import { UserRoleEnum } from "../enum/user-role.enum.js";
import { GenerateTokenParams, ITokenPayload } from "../interface/token.interface.js";

// Generate Token
export const generateToken = ({
    payload,
    secretKey,
    options = {
        expiresIn: "1h",
        notBefore: 0,
        audience: [],
        issuer: "social-media-demo",
    },
}:GenerateTokenParams) => {
    return jwt.sign(payload, secretKey, options);
};

// Verify Token
export const verifyToken = (token:string, secretKey:string):ITokenPayload  => {
    return jwt.verify(token, secretKey) as ITokenPayload;
};

// Decode Token
export const decodeToken = (token:string) => {
    return jwt.decode(token);
};

// Login Credentials
export const loginCredentials = (role:UserRoleEnum) => {
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