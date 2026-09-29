import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import { UserRoleEnum } from "../enum/user-role.enum.js";
// Generate Token Params
export interface GenerateTokenParams{
    payload:string| object | Buffer,
    secretKey:string,
    options:jwt.SignOptions
}
// token payload
export interface ITokenPayload  extends jwt.JwtPayload{
    _id:Types.ObjectId,
    role:UserRoleEnum
}
// token return 
export interface ITokenReturn {
    accessToken : string,
    refreshToken : string
}