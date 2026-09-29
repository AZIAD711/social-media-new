import { Request } from "express";
import { IUser } from "./user.interface.js";
import { HydratedDocument } from "mongoose";

export interface UserRequest extends Request{
    user:HydratedDocument<IUser>
}