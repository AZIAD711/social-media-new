import { HydratedDocument } from "mongoose";
import { IUser } from "../../common/interface/user.interface.js";
import userModel from "../../model/user.model.js";
import ErrorMessage from '../../common/error/error.js'
import { ILoginDto } from "./auth.dto.js";
import { ITokenReturn } from "../../common/interface/token.interface.js";
import { generateToken } from "../../common/token/token.js";

class AuthService {
    constructor() { }
    // SIGN UP 
    async signup(data: IUser): Promise<IUser> {
        const exsitEmail: HydratedDocument<IUser> | null = await userModel.findOne({ email: data.email })
        if (exsitEmail) ErrorMessage.emailExsitError()
        const user: HydratedDocument<IUser> = await userModel.create(data)
        return user
    }
    // LOGIN 
    async login(data:ILoginDto):Promise<ITokenReturn>{
        const user = await userModel.findOne({ email: data.email , password:data.password })
        if (!user) ErrorMessage.loginError()
        const accessToken = generateToken({
        payload: {
            _id: user?._id,
            role: user?.role
        },
        secretKey: process.env.USER_ACCESS_SECRET as string,
        options: {
            expiresIn: "2h",
        }
    })
    const refreshToken = generateToken({
        payload: {
            _id: user?._id,
            role: user?.role
        },
        secretKey: process.env.USER_REFRESH_SECERT as string,
        options: {
            expiresIn: "7d",
        }
    })
    return { accessToken, refreshToken } 
    }
}
export default new AuthService()