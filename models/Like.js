const mongoose = require("mongoose")

const {Schema} = mongoose

const LikeSchema = new Schema({
    authorId:{
        type:String
    },
    postId:{
        type:String
    }
})

module.exports = mongoose.model("likes", LikeSchema)