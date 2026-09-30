import express from "express";
import dotenv from "dotenv";
import { databaseConnection } from "./database/mongo.db.js";
import { redisConnection } from "./database/redis.db.js";
import authRouter from "./module/auth/auth.routing.js";
import userRouter from "./module/user/user.routing.js";
import postRouter from "./module/post/post.routing.js";
// import { redisConnection } from "./src/database/redis-connection.js"
// import cors from "cors"
// import { createRateLimiter } from "./src/common/middleware/rate-limiter.js"
export const app = () => {
    // const PORT = process.env.SERVER_PORT
    // const whishList = [`http://localhost:${PORT}`, `http://localhost:6000`]
    // var corsOptions = {
    //     origin: function (origin, callback) {
    //         if (whishList.includes(origin)) {
    //             callback(null, true)
    //         }
    //         else {
    //             callback(new Error("Not allowed by CORS"))
    //         }
    //     },
    //     methods: ["GET", "POST", "PUT", "DELETE"],
    //     allowedHeaders: ["Content-Type", "Authorization"],
    //     credentials: true
    // }
    //     const Limiter = createRateLimiter({
    //     windowMs: 60 * 60 * 1000,
    //     max: 3,
    //     message: "Too many registration attempts."
    // });
    dotenv.config();
    databaseConnection();
    redisConnection();
    const router = express();
    // router.use("/uploads", express.static("uploads"))
    router.use(express.json());
    router.use("/auth", authRouter);
    router.use("/user", userRouter);
    router.use("/post", postRouter);
    return router;
};
export default app;
