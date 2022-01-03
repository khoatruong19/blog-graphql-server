const resolvers = {
    Query:{
        posts: async (parent,args,{mongoDataMethods}) => await mongoDataMethods.getAllPosts(),
        post: async (parent,{id},{mongoDataMethods}) => await mongoDataMethods.getPostById(id),
        authors: async (parent,args,{mongoDataMethods}) => await mongoDataMethods.getAllAuthors(),
        author: (parent,args,{mongoDataMethods}) => args,
        comments: async (parent,{postId},{mongoDataMethods}) => await mongoDataMethods.getAllComments(postId),
        likes: async (parent,{postId},{mongoDataMethods}) => await mongoDataMethods.getAllLikes(postId),
        checkLike: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.checkLike(args)
    },

    Author: {
        posts: (parent,args ) => posts.filter(post => post.id == parent.id)
    },

    Post: {
        author: async ({authorId}, args,{mongoDataMethods}) => await mongoDataMethods.getAuthorById(authorId)
    },

    Comment: {
        author: async ({authorId}, args,{mongoDataMethods}) => await mongoDataMethods.getAuthorById(authorId)
    },

    Mutation: {
        createNewAuthor: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createAuthor(args),
        createNewPost: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createPost(args),
        deletePost: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.deletePostbyId(args.id),
        deleteComment: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.deleteCommentbyId(args.id),
        createNewComment: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createComment(args),
        handleLike: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.handleLike(args),
    }
   
}

module.exports = resolvers