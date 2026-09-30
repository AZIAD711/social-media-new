import ErrorMessage from '../../common/error/error.js';
import commentModel from "../../model/comment.model.js";
class CommentService {
    constructor() { }
    // CREATE COMMENT 
    async createComment(commentData, userId, postId) {
        const comment = await commentModel.create({
            content: commentData.content,
            ownerId: userId,
            postId: postId
        });
        return comment;
    }
    // GET ONE COMMENT 
    async getOneComment(comemntId, userId) {
        const comment = await commentModel.findOne({ ownerId: userId, _id: comemntId });
        if (!comment)
            throw ErrorMessage.commentNotFoundError();
        return comment;
    }
    // GET MANY COMMENT 
    async getManyComment(userId) {
        const comment = await commentModel.find({ ownerId: userId });
        if (!comment)
            throw ErrorMessage.commentNotFoundError();
        return comment;
    }
    // UPDATE COMMENT 
    async updateComment(data, commentId, userId) {
        const comment = await commentModel.findOneAndUpdate({ _id: commentId, ownerId: userId }, { $set: data }, { new: true, runValidators: true });
        if (!comment)
            throw ErrorMessage.commentNotFoundError();
        return comment;
    }
    // DELETE COMMENT 
    async deleteComment(commentId, userId) {
        const comment = await commentModel.findOneAndDelete({ ownerId: userId, _id: commentId });
        if (!comment)
            throw ErrorMessage.commentNotFoundError();
        return comment;
    }
}
export default new CommentService();
