import {changeStatusOfRequestController, sendRequestController, showRequestController} from "./friend.controller.js"
import express from "express"
import { schemaValidate } from "../../common/middleware/schema.middleware.js"
import { authentication, authorization } from "../../common/middleware/auth.middleware.js"
import { UserRoleEnum } from "../../common/enum/user-role.enum.js"
const friendRouter = express.Router()
friendRouter.post("/request/send/:id",authentication(),authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN),sendRequestController)
friendRouter.get("/request/show",authentication(),authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN),showRequestController)
friendRouter.patch("/request/change-status/:id",authentication(),authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN),changeStatusOfRequestController)
export default friendRouter