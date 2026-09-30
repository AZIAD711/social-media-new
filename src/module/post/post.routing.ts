import { createPostController, getOnePostController ,getManyPostController} from "./post.controller.js"
import express from "express"
import { schemaValidate } from "../../common/middleware/schema.middleware.js"
import { authentication, authorization } from "../../common/middleware/auth.middleware.js"
import { createPostSchema, getOnePostSchema } from "./post.valdition.js"
import { UserRoleEnum } from "../../common/enum/user-role.enum.js"
const postRouter = express.Router()
postRouter.post("/add", schemaValidate(createPostSchema), authentication(), authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN), createPostController)
postRouter.get("/get/one/:id", schemaValidate(getOnePostSchema), authentication(), authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN), getOnePostController)
postRouter.get("/get/many", authentication(), authorization(UserRoleEnum.USER, UserRoleEnum.ADMIN), getManyPostController)
export default postRouter