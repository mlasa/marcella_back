"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const Bcrypt_1 = require("../utils/libs/Bcrypt");
const JsonWebToken_1 = require("../utils/libs/JsonWebToken");
async function create(data) {
    const userFound = await User_1.default.findOne({
        $or: [
            { username: data.username },
            { email: data.email }
        ]
    });
    const user = userFound.toJSON();
    if (!user)
        return null;
    const passwordIsEqual = await Bcrypt_1.compareTwo(data.password, user.password);
    if (passwordIsEqual) {
        const token = await JsonWebToken_1.generateAuthenticationToken(user);
        return user;
    }
}
exports.default = { create };
