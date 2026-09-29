import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();
export const client = createClient({
    url: process.env.REDIS_URL || "rediss://default:gQAAAAAABOJBAAIgcDI3ZWFiMmRiZjAxMjM0MzhkYTBlNWY2NDc3MzM0MmM4MQ@evident-moose-320065.upstash.io:6379"
});
client.on("error", function (err) {
    throw err;
});
export const redisConnection = async () => {
    try {
        await client.connect();
        console.log("✅ REDIS CONNECTION SCCUESSFULLY !");
    }
    catch (error) {
        console.log(`❌ ERROR IN REDIS CONNECTION : `, error);
    }
};
