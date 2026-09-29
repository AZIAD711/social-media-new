import userModel from "../../model/user.model.js";
import ErrorMessage from '../../common/error/error.js';
class UserService {
    constructor() { }
    // GET PROFILE 
    async getProfile(userId) {
        const user = await userModel.findById(userId).select("-password");
        if (!user)
            throw ErrorMessage.userNotFoundError();
        return user;
    }
    // UPDATE PROFILE
    async updateProfile(userId, data) {
        const user = await userModel.findByIdAndUpdate(userId, data, { new: true });
        if (!user)
            throw ErrorMessage.userNotFoundError();
        return user;
    }
    // DELETE PROFILE 
    async deleteProfile(userId) {
        const user = await userModel.findByIdAndDelete(userId);
        if (!user)
            throw ErrorMessage.userNotFoundError();
        return user;
    }
    // GET ALL USERS PROFILE 
    async getAllUsersProfile() {
        const user = await userModel.find();
        return user;
    }
}
export default new UserService();
