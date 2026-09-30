import ErrorMessage from '../../common/error/error.js';
import postModel from "../../model/post.model.js";
class PostService {
    constructor() { }
    // CREATE POST 
    async createPost(postData, userId) {
        const findTitle = await postModel.findOne({ title: postData.title });
        if (findTitle)
            throw ErrorMessage.duplicateTitlePostError();
        const post = await postModel.create({
            content: postData.content,
            title: postData.title,
            react: postData.react,
            image: postData.image,
            ownerId: userId
        });
        return post;
    }
    // GET ONE POST 
    async getOnePost(postId, userId) {
        const post = await postModel.findOne({ ownerId: userId, _id: postId });
        if (!post)
            throw ErrorMessage.postNotFoundError();
        return post;
    }
    // GET ONE POST 
    async getManyPost(userId) {
        const post = await postModel.find({ ownerId: userId });
        if (!post)
            throw ErrorMessage.postNotFoundError();
        return post;
    }
}
export default new PostService();
