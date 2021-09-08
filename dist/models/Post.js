"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: String,
    publishedAt: Date,
    labels: [String],
    text: {
        type: String,
        required: true,
    },
}, { collection: 'posts', strict: true });
const Post = mongoose_1.model('Post', PostSchema);
exports.default = Post;
