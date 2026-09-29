import mongoose from "mongoose"

export const databaseConnection = async()=>{
    const databaseUrl = process.env.DATABASE_URL as string
    try{
        await mongoose.connect(databaseUrl,{
            maxPoolSize:process.env.MAX_POOL as unknown as number,
            serverSelectionTimeoutMS:process.env.SERVER_TIMEOUT as unknown as number
        })
        console.log("✅ STATUS IN DATABASE MONGOOSE : PASSED ")
    }
    catch(errorDatabase){
        console.log("❌ ERROR IN DATABASE : ",errorDatabase)
    }
}