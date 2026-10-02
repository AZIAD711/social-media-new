import express from "express"
import dotenv, { config } from "dotenv"
import { databaseConnection } from "./database/mongo.db.js"
import {redisConnection } from "./database/redis.db.js"
import authRouter from "./module/auth/auth.routing.js"
import userRouter from "./module/user/user.routing.js"
import postRouter from "./module/post/post.routing.js"
import commentRouter from "./module/comment/comment.routing.js"
import friendRouter from "./module/friend/friend.routing.js"
export const app = () => {
    dotenv.config();
    databaseConnection()
    redisConnection()
    const router = express()
    // router.use("/uploads", express.static("uploads"))
    router.use(express.json())
    router.use("/auth",authRouter)
    router.use("/user",userRouter)
    router.use("/post",postRouter)
    router.use("/comment",commentRouter)
    router.use("/friend",friendRouter)
    return router
}
export default app