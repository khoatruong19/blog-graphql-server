const Author = require("../models/Author")
const Post = require("../models/Post")
const Comment = require("../models/Comment")
const Like = require("../models/Like")

const mongoDataMethods = {
    getAuthorById: async (id) => await Author.findById(id),
    getAllAuthors: async () => await Author.find(),
    createAuthor: async (args) => {
        if(await Author.findById({_id: args._id})) console.log("Found")
        else {
            const newAuthor = new Author(args)
            return await newAuthor.save()
        }
    },
    getPostById: async (id) => await Post.findById(id),
    getAllPosts: async (condition) => await Post.find(),
    createPost: async (args) => {
        const newPost = new Post(args)
        return await newPost.save()
    },
    deletePostbyId: async (id) => {
        await Post.deleteOne({_id:id})
        return "Deleted"
    },
    getAllComments: async (postId) => await Comment.find({postId}),
    createComment: async (args) => {
        const newComment = new Comment(args)
        return await newComment.save()
    },
    deleteCommentbyId: async (id) => {
        await Comment.deleteOne({_id:id})
        return "Deleted"
    },
    getAllLikes: async (postId) => await Like.find({postId}),
    checkLike: async ({postId, authorId}) => await Like.findOne({postId, authorId}) !== null,
    handleLike: async (args) => {
        const {postId, authorId} = args
        const liked = await Like.findOne({postId,authorId})
        console.log(liked)
        if( liked ) {
             await Like.deleteOne({postId, authorId})
            console.log( "Unlike")
        }
        else{
            const newLike = new Like(args)
            await newLike.save()
            console.log( "Like")
        }
    },

}

module.exports = mongoDataMethods