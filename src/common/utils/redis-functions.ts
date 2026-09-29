import { client } from "../../database/redis.db.js"
// OTP TEMPLATE 
export const otpTemplateWtihEmail=(email:string):string=>{
    return `otp:${email}`
}
// SET FUNCTION 
export const setRecord = async (key:string, value:unknown, ttl?:number) => {
    return ttl ? await client.set(key, JSON.stringify(value), { EX: ttl }) : await client.set(key, JSON.stringify(value))
}
// GET FUNCTION 
export const getRecord = async (key:string):Promise<unknown|null> => {
    const record = await client.get(key);

    return record ? JSON.parse(record) : null;
}
// DELETE FUNCTION 
export const deleteRecord = async (key:string):Promise<unknown> => {
    return await client.del(key)
}
// EXSIT FUNCTION
export const exsitRecord = async (key:string):Promise<unknown> => {
    return await client.exists(key)
}
// FLUSHALL FUNCTION 
export const flushAllRecords = async ():Promise<unknown> => {
    return await client.flushAll()
}
// MGET FUNCTION 
// export const mGetRecords = async (keys) => {
//     return client.mGet(keys)
// }