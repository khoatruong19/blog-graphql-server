const mongoose = require("mongoose")
const {Schema} = mongoose

const CommentSchema = new Schema({
    comment:{type:String},
    postId: {type: String},
    authorId: {type:String}
})

module.exports = mongoose.model("comments", CommentSchema)
