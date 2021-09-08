"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Profile_1 = __importDefault(require("../models/Profile"));
async function index() {
    const profile = await Profile_1.default.find();
    return profile;
}
async function create(data) {
    const profile = await Profile_1.default.create(data);
    return profile || null;
}
async function update(id, data) {
    const profile = await Profile_1.default.findById(id);
    if (!profile)
        return null;
    await Profile_1.default.updateOne({ _id: id }, data);
    return await Profile_1.default.findById(id);
}
async function remove(id) {
    await Profile_1.default.deleteOne({ _id: id });
}
exports.default = { create, index, remove, update };
