import { z } from "zod";
import { GenderEnum } from "../../common/enum/gender.enum.js";
import { UserRoleEnum } from "../../common/enum/user-role.enum.js";
import { ProviderEnum } from "../../common/enum/provider.enum.js";
import { StatusAccountEnum } from "../../common/enum/status-account.enum.js";
// SIGN UP SCHEMA
export const signupSchema = {
    body: z.object({
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100),
        email: z.string().email().max(100),
        password: z.string().max(6),
        address: z.string(),
        gender: z.nativeEnum(GenderEnum),
        phoneNumber: z.string().length(11),
        age: z.number().min(18).max(120),
        confirmEmail: z.boolean().optional(),
        profileImage: z.string().optional(),
        role: z.nativeEnum(UserRoleEnum),
        provider: z.nativeEnum(ProviderEnum),
        changeCredintals: z.coerce.date(),
        statusAccount: z.nativeEnum(StatusAccountEnum),
    })
};
// LOGIN
export const loginSchema = {
    body: z.object({
        email: z.string().email().max(100),
        password: z.string().max(6),
    })
};
// FORGET PASSWORD 
export const forgetPasswordSchema = {
    body: z.object({
        email: z.string().email().max(100),
    })
};
// RESET PASSWORD 
export const resetPasswordSchema = {
    body: z.object({
        email: z.string().email().max(100),
        password: z.string().max(6),
        confirmPassword: z.string().max(6),
        otp: z.string().max(4),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }),
};
