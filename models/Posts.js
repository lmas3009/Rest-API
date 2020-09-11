const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var count=0
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    artwork: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Posts', PostSchema)