import {getProfileController} from "./user.controller.js"
import express from "express"
import { schemaValidate } from "../../common/middleware/schema.middleware.js"
import {authentication,authorization} from "../../common/middleware/auth.middleware.js"
import {  } from "./user.valdition.js"
import { UserRoleEnum } from "../../common/enum/user-role.enum.js"
const userRouter = express.Router()
userRouter.get("/get/profile",authentication(),authorization(UserRoleEnum.USER,UserRoleEnum.ADMIN),getProfileController)
export default userRouter