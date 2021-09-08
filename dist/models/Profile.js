"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProfileSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    tags: [String],
    description: {
        type: String,
    },
}, { collection: 'profile', strict: false });
const Profile = mongoose_1.model('Profile', ProfileSchema);
exports.default = Profile;
