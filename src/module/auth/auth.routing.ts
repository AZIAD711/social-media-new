import {signupController,loginController,forgetPasswordController,resetPasswordController} from "./auth.controller.js"
import express from "express"
import { schemaValidate } from "../../common/middleware/schema.middleware.js"
import { forgetPasswordSchema, loginSchema, signupSchema,resetPasswordSchema } from "./auth.valdition.js"
const authRouter = express.Router()
authRouter.post("/signup",schemaValidate(signupSchema),signupController)
authRouter.post("/login",schemaValidate(loginSchema),loginController)
authRouter.post("/forget/password",schemaValidate(forgetPasswordSchema),forgetPasswordController)
authRouter.post("/reset/passworauth",schemaValidate(resetPasswordSchema),resetPasswordController)
export default authRouter