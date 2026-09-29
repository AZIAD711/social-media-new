import { HydratedDocument } from "mongoose";
import { IUser } from "../../common/interface/user.interface.js";
import userModel from "../../model/user.model.js";
import ErrorMessage from '../../common/error/error.js'
import { ILoginDto, IResetPassword } from "./auth.dto.js";
import { ITokenReturn } from "../../common/interface/token.interface.js";
import { generateToken } from "../../common/token/token.js";
import { otpTemplateWtihEmail, setRecord,getRecord } from "../../common/utils/redis-functions.js";
import { generateOTP } from "../../common/utils/generate-otp.js";
import { sendEmail } from "../../common/utils/mail.js";

class AuthService {
    constructor() { }
    // SIGN UP 
    async signup(data: IUser): Promise<IUser> {
        const exsitEmail: HydratedDocument<IUser> | null = await userModel.findOne({ email: data.email })
        if (exsitEmail) throw ErrorMessage.emailExsitError()
        const user: HydratedDocument<IUser> = await userModel.create(data)
        return user
    }
    // LOGIN 
    async login(data: ILoginDto): Promise<ITokenReturn> {
        const user = await userModel.findOne({ email: data.email, password: data.password })
        if (!user) throw ErrorMessage.loginError()
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
    // FORGET PASSWORD 
    async forgetPassword(emailValue: string) {
        const exsitEmail: HydratedDocument<IUser> | null = await userModel.findOne({ email: emailValue })
        if (!exsitEmail) throw ErrorMessage.notFoundEmailError()
        const otp = generateOTP()
        const addOtp = await setRecord(otpTemplateWtihEmail(emailValue), otp, 4 * 60)
        // const getOtp = await getRecord(otpTemplateWtihEmail(email))
        // console.log(getOtp)
        const emailSend = await sendEmail({
            toValue: emailValue,
            subjectValue: "Reset Password",
            htmlValue: `<h1>Hello to social media app👋</h1><br><h2>OTP : ${otp}</h2>`
        })
    }
    // RESET PASSWORD 
    async resetPassword(data: IResetPassword): Promise<HydratedDocument<IUser>|null> {
        const exsitEmail: HydratedDocument<IUser> | null = await userModel.findOne({ email: data.email })
        if (!exsitEmail) throw ErrorMessage.notFoundEmailError()
        const getOtp = await getRecord(otpTemplateWtihEmail(data.email))
        if (String(getOtp) !== String(data.otp)) ErrorMessage.invalidOtpError()
        const newPassword:HydratedDocument<IUser>|null = await userModel.findOneAndUpdate({ email: data.email }, { password: data.password }, { new: true })
        return newPassword
    }
}
export default new AuthService()