import {signupController} from "./auth.controller.js"
// import {authentication,authorization} from "../../common/middleware/auth.middleware.js"
import express from "express"
import { UserRoleEnum } from "../../common/enum/user-role.enum.js"
import { schemaValidate } from "../../common/middleware/schema.middleware.js"
import { signupSchema } from "./auth.valdition.js"
// import { schemaValidate } from "../../common/middleware/valdiate.middelware.js"
const userRouter = express.Router()
userRouter.post("/signup",schemaValidate(signupSchema),signupController)
export default userRouter