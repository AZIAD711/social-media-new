import {signupController,loginController} from "./auth.controller.js"
import express from "express"
import { schemaValidate } from "../../common/middleware/schema.middleware.js"
import { loginSchema, signupSchema } from "./auth.valdition.js"
const userRouter = express.Router()
userRouter.post("/signup",schemaValidate(signupSchema),signupController)
userRouter.post("/login",schemaValidate(loginSchema),loginController)
export default userRouter