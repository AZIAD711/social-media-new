import z from "zod";
import { ReactEnum } from "../../common/enum/react.enum.js";
const noData = "No data provided!";
// CREATE POST SCHEMA
export const createPostSchema = {
    body: z.object({
        title: z.string().trim().min(1).max(30),
        content: z.string().trim().min(2).max(200),
        image: z.string().default(noData),
        react: z.nativeEnum(ReactEnum),
    }),
};
// GET ONE POST SCHEMA 
export const getOnePostSchema = {
    params: z.object({
        id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid postId"),
    }),
};
// UPDATE POST SCHEMA
export const updatePostSchema = {
    // params: z.object({
    //     id: getOnePostSchema.params,
    // }),
    body: z
        .object({
        title: z.string().trim().min(1).max(30).optional(),
        content: z.string().trim().min(2).max(200).optional(),
        image: z.string().optional(),
        react: z.nativeEnum(ReactEnum).optional(),
    }).partial()
};
