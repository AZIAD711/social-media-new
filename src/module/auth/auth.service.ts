import { HydratedDocument } from "mongoose";
import { IUser } from "../../common/interface/user.interface.js";
import userModel from "../../model/user.model.js";
import ErrorMessage from '../../common/error/error.js'

class AuthService {
    constructor() { }
    // SIGN UP 
    async signup(data: IUser): Promise<IUser> {
        const exsitEmail: HydratedDocument<IUser> | null = await userModel.findOne({ email: data.email })
        if (exsitEmail) ErrorMessage.emailExsit()
        const user: HydratedDocument<IUser> = await userModel.create(data)
        return user
    }
}
export default new AuthService()