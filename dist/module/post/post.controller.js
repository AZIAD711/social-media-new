import postService from "./post.service.js";
// CREATE POST
export const createPostController = async (request, response) => {
    try {
        const { user } = request;
        const data = request.body;
        const result = await postService.createPost(data, user.id);
        return response.status(201).json({
            message: "Post Created",
            data: result
        });
    }
    catch (error) {
        console.log("❌ ERROR IN CREATE POST CONTROLLER : ", error);
        return response.status(500).json({
            errorMessage: "Internal Server Error !"
        });
    }
};
// GET ONE POST
export const getOnePostController = async (request, response) => {
    try {
        const { user } = request;
        const postId = request.params.id;
        const result = await postService.getOnePost(postId, user.id);
        return response.status(200).json({
            message: "Post Getted",
            data: result
        });
    }
    catch (error) {
        console.log("❌ ERROR IN GET ONE POST CONTROLLER : ", error);
        return response.status(500).json({
            errorMessage: "Internal Server Error !"
        });
    }
};
