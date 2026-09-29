import userModel from "../../model/user.model.js";
import ErrorMessage from '../../common/error/error.js';
class AuthService {
    constructor() { }
    // SIGN UP 
    async signup(data) {
        const exsitEmail = await userModel.findOne({ email: data.email });
        if (exsitEmail)
            ErrorMessage.emailExsit();
        const user = await userModel.create(data);
        return user;
    }
}
export default new AuthService();
