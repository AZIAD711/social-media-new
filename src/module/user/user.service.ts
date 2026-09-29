import { HydratedDocument, Types } from "mongoose";
import { IUser } from "../../common/interface/user.interface.js";
import userModel from "../../model/user.model.js";
import ErrorMessage from '../../common/error/error.js'

class UserService {
    constructor() { }
    // GET PROFILE 
    async getProfile(userId: string | Types.ObjectId): Promise<HydratedDocument<IUser>> {
        const user = await userModel.findById(userId).select("-password");
        if (!user) throw ErrorMessage.userNotFoundError();
        return user;
    }
    // UPDATE PROFILE
    async updateProfile(userId: string | Types.ObjectId , data:IUser){
        const user = await userModel.findByIdAndUpdate(userId,data,{new:true})
        if (!user) throw ErrorMessage.userNotFoundError();
        return user
    }
    // DELETE PROFILE 
    async deleteProfile(userId: string | Types.ObjectId): Promise<HydratedDocument<IUser>> {
        const user = await userModel.findByIdAndDelete(userId);
        if (!user) throw ErrorMessage.userNotFoundError();
        return user;
    }
    // GET ALL USERS PROFILE 
    async getAllUsersProfile(): Promise<HydratedDocument<IUser>[]> {
        const user = await userModel.find();
        return user;
    }
}
export default new UserService()