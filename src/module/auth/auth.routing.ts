import {signupController,loginController,forgetPasswordController,resetPasswordController} from "./auth.controller.js"
import express from "express"
import { schemaValidate } from "../../common/middleware/schema.middleware.js"
import { forgetPasswordSchema, loginSchema, signupSchema,resetPasswordSchema } from "./auth.valdition.js"
const userRouter = express.Router()
userRouter.post("/signup",schemaValidate(signupSchema),signupController)
userRouter.post("/login",schemaValidate(loginSchema),loginController)
userRouter.post("/forget/password",schemaValidate(forgetPasswordSchema),forgetPasswordController)
userRouter.post("/reset/password",schemaValidate(resetPasswordSchema),resetPasswordController)
export default userRouter