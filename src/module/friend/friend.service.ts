import { HydratedDocument, Types } from "mongoose";
import ErrorMessage from '../../common/error/error.js'
import { IFriend } from "../../common/interface/friend.interface.js";
import friendModel from "../../model/friend.model.js";
import userModel from "../../model/user.model.js";
class FriendService {
    constructor() { }
    // SEND REQUEST 
    async sendRequest(requesterId: string | Types.ObjectId, recieverId: string | Types.ObjectId): Promise<HydratedDocument<IFriend>> {
        const findFriend = await userModel.findById(recieverId)
        if(!findFriend) throw ErrorMessage.userNotFoundError()
        const friend = await friendModel.create({
        requesterId:requesterId,
        recieverId:recieverId 
        })
        return friend
    }
    // SHOW REQUEST 
    async showRequest(userId: string | Types.ObjectId): Promise<HydratedDocument<IFriend>[]> {
        const friends = await friendModel.find({ recieverId: userId });
        return friends;
    }
}
export default new FriendService()