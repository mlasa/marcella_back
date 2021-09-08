"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../models/Post"));
const search = async ({ limit, page, fields, orderBy, sortBy, keyWord }) => {
    const skip = (page > 1) ? (page - 1) * limit : 0;
    const allPosts = Post_1.default.find();
    if (keyWord) {
        const regex = new RegExp(`.*${keyWord}.*`, 'i');
        const searchQuery = {
            $or: [
                { author: regex },
                { title: regex },
                { labels: regex },
            ]
        };
        allPosts.find(searchQuery);
    }
    if (limit)
        allPosts.limit(limit);
    if (skip)
        allPosts.skip(skip);
    if (fields)
        allPosts.select(fields.split(','));
    if (orderBy)
        allPosts.sort({ [orderBy]: sortBy });
    return allPosts.exec();
};
const create = async (postData) => {
    const post = await Post_1.default.create(postData);
    return post || null;
};
const findPostbyId = async (id) => {
    const post = await Post_1.default.findById(id);
    if (!post)
        return null;
    return post;
};
const remove = async (id) => {
    const post = await findPostbyId(id);
    if (!post) {
        return false;
    }
    await Post_1.default.deleteOne({ _id: id });
    return true;
};
exports.default = { create, remove, search };
