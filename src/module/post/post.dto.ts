import { ReactEnum } from "../../common/enum/react.enum.js";

// UPDATE POST DTO 
export interface IUpdatePostDto {
    title: string,
    content: string,
    image: string,
    react: ReactEnum
}