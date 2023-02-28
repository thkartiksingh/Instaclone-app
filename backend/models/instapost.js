const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String },
    likes: { type: Number },
    author: {type: String},
    description: { type: String },
    date: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Post', PostSchema)
