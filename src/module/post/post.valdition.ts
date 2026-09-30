import z from "zod";
import { GenderEnum } from "../../common/enum/gender.enum.js";
import { ProviderEnum } from "../../common/enum/provider.enum.js";
import { StatusAccountEnum } from "../../common/enum/status-account.enum.js";
import { UserRoleEnum } from "../../common/enum/user-role.enum.js";
import { ReactEnum } from "../../common/enum/react.enum.js";
const noData = "No data provided!";
// CREATE POST SCHEMA
export const createPostSchema = {
  body: z.object({
    title: z.string().trim().min(1).max(30),
    content: z.string().trim().min(2).max(200),
    image: z.string().default(noData),
    react: z.nativeEnum(ReactEnum),
    // ownerId removed: take it from req.user after validation
  }),
};