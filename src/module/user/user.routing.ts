import {getProfileController,updateProfileController,deleteProfileController,getAllUsersController} from "./user.controller.js"
import express from "express"
import { schemaValidate } from "../../common/middleware/schema.middleware.js"
import {authentication,authorization} from "../../common/middleware/auth.middleware.js"
import {updateProfileSchema  } from "./user.valdition.js"
import { UserRoleEnum } from "../../common/enum/user-role.enum.js"
const userRouter = express.Router()
userRouter.get("/get/profile",authentication(),authorization(UserRoleEnum.USER,UserRoleEnum.ADMIN),getProfileController)
userRouter.put("/update/profile",schemaValidate(updateProfileSchema),authentication(),authorization(UserRoleEnum.USER,UserRoleEnum.ADMIN),updateProfileController)
userRouter.delete("/delete/profile",authentication(),authorization(UserRoleEnum.USER,UserRoleEnum.ADMIN),deleteProfileController)
userRouter.get("/get/all",authentication(),authorization(UserRoleEnum.ADMIN),getAllUsersController)
export default userRouter