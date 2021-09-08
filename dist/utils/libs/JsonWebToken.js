"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthenticationToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function generateAuthenticationToken(payload) {
    return await jsonwebtoken_1.default.sign(payload, process.env.SECRET_TOKEN, {
        expiresIn: parseInt(process.env.TIME_EXPIRATION_AUTH_TOKEN)
    });
}
exports.generateAuthenticationToken = generateAuthenticationToken;
