"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const Bcrypt_1 = require("../utils/libs/Bcrypt");
async function index() {
    const profile = await User_1.default.find();
    return profile;
}
async function create(data) {
    const { username, name, email, password } = data;
    console.log('Vou encriptar');
    const encryptedPassword = await Bcrypt_1.encrypt(password);
    const userCreated = await User_1.default.create({
        username,
        name,
        email,
        password: encryptedPassword
    });
    return userCreated || null;
}
exports.default = { create, index };
