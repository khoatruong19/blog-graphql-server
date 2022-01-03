const authors = [
    {
        id: 1,
        username:"user1",
        imageUrl:"url1"
    },
    {
        id: 2,
        username:"user2",
        imageUrl:"url2"
    },
    {
        id: 3,
        username:"user3",
        imageUrl:"url3"
    },

]

const posts = [
    {
        id: 1,
        title:"post 1",
        content: "test post",
        authorId: 1
    },
    {
        id: 2,
        title:"post 2",
        content: "test post",
        authorId: 2
    }, {
        id: 3,
        title:"post 3",
        content: "test post",
        authorId: 3
    },
]

module.exports = {authors, posts}