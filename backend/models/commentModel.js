const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    tag: Object,
    reply: mongoose.Types.ObjectId,

    postId: mongoose.Types.ObjectId,
    postUserId: mongoose.Types.ObjectId
}, {
    timestamps: true
})

module.exports = mongoose.model('comment', commentSchema)