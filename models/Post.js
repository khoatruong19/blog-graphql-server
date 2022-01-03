const mongoose = require("mongoose")
const {Schema} = mongoose
const PostSchema = new Schema({
    title:{
        type: String
    },
    content:{
        type:String
    },
    authorId:{
        type:String
    }
})

module.exports = mongoose.model("posts",PostSchema)