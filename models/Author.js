const mongoose = require("mongoose")

const {Schema} = mongoose

const AuthorSchema = new Schema({
    _id:{
        type:String
    },
    username:{
        type: String
    },
    imageUrl:{
        type: String
    }
},{_id: false})

module.exports = mongoose.model('authors', AuthorSchema)