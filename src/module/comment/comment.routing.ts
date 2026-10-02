import {createCommentController,deleteCommentController,getManyCommentController,getOneCommentController,updateCommentController} from "./comment.controller.js"
import express from "express"
import { schemaValidate } from "../../common/middleware/schema.middleware.js"
import { authentication, authorization } from "../../common/middleware/auth.middleware.js"
import { createCommentSchema,getOneCommentSchema,updateCommentSchema } from "./comment.valdition.js"
import { UserRoleEnum } from "../../common/enum/user-role.enum.js"
const commentRouter = express.Router()
commentRouter.post("/add/:id", schemaValidate(createCommentSchema), authentication(), authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN), createCommentController)
commentRouter.get("/get/one/:id", schemaValidate(getOneCommentSchema), authentication(), authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN), getOneCommentController)
commentRouter.get("/get/many", authentication(), authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN), getManyCommentController)
commentRouter.put("/update/:id", schemaValidate(updateCommentSchema),authentication(), authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN), updateCommentController)
commentRouter.delete("/delete/:id",schemaValidate(getOneCommentSchema),authentication(), authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN), deleteCommentController)
export default commentRouter