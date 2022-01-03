const {gql} = require("apollo-server-express")

const typeDefs = gql`
    type Post{
        id: ID!
        title: String
        content: String
        author: Author
        comment: Comment
    }

    type Comment{
        id:ID!
        comment: String
        author: Author
        postId: ID!
    }

    type Like{
        id:ID!
        authorId: String!
        postId: ID!
    }

    type Author{
        id: ID!
        username: String
        imageUrl: String
        posts: [Post]
        comments :[Comment]
    }

    type Query{
        posts: [Post]
        post(id:ID!): Post
        authors: [Author]
        author(id:ID!): Author
        comments(postId : ID!): [Comment]
        likes(postId: ID!): [Like]
        checkLike(authorId: String, postId:ID!): Boolean
    }

    type Mutation {
        createNewAuthor(_id: String,username: String, imageUrl:String): Author,
        createNewPost(title: String, content:String, authorId: ID! ): Post,
        deletePost(id: String): String,
        createNewComment(comment:String, postId: ID!, authorId: String!): Comment,
        deleteComment(id: String): String,
        handleLike(postId: ID!, authorId: String!) : String,
    }
`

module.exports = typeDefs