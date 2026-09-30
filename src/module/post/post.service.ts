import { HydratedDocument, Types } from "mongoose";
import ErrorMessage from '../../common/error/error.js'
import { IPost } from "../../common/interface/post.interface.js";
import postModel from "../../model/post.model.js";
import { IUpdatePostDto } from "./post.dto.js";
class PostService {
    constructor() { }
    // CREATE POST 
    async createPost(postData: IPost, userId: string | Types.ObjectId): Promise<HydratedDocument<IPost>> {
        const findTitle = await postModel.findOne({ title: postData.title })
        if (findTitle) throw ErrorMessage.duplicateTitlePostError()
        const post = await postModel.create({
            content: postData.content,
            title: postData.title,
            react: postData.react,
            image: postData.image,
            ownerId: userId
        })
        return post
    }
    // GET ONE POST 
    async getOnePost(postId: string | Types.ObjectId, userId: string | Types.ObjectId): Promise<HydratedDocument<IPost>> {
        const post: HydratedDocument<IPost> | null = await postModel.findOne({ ownerId: userId, _id: postId })
        if (!post) throw ErrorMessage.postNotFoundError()
        return post
    }
    // GET MANY POST 
    async getManyPost(userId: string | Types.ObjectId): Promise<HydratedDocument<IPost>[]> {
        const post: HydratedDocument<IPost>[] | null = await postModel.find({ ownerId: userId })
        if (!post) throw ErrorMessage.postNotFoundError()
        return post
    }
    // UPDATE POST 
    async updatePost(
        data: IUpdatePostDto,
        postId: string | Types.ObjectId,
        userId: string | Types.ObjectId
    ): Promise<HydratedDocument<IPost>> {
        const post = await postModel.findOneAndUpdate(
            { _id: postId, ownerId: userId },
            { $set: data },
            { new: true, runValidators: true }
        );
        if (!post) throw ErrorMessage.postNotFoundError();
        return post;
    }
    // DELETE POST 
    async deletePost(postId: string | Types.ObjectId, userId: string | Types.ObjectId): Promise<HydratedDocument<IPost>> {
        const post: HydratedDocument<IPost> | null = await postModel.findOneAndDelete({ ownerId: userId, _id: postId })
        if (!post) throw ErrorMessage.postNotFoundError()
        return post
    }
}
export default new PostService()