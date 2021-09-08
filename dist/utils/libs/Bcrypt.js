"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareTwo = exports.encrypt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
async function encrypt(data) {
    const hashedData = await bcrypt_1.default.hash(data, 10);
    return hashedData;
}
exports.encrypt = encrypt;
async function compareTwo(data, encrypted) {
    const isEqual = await bcrypt_1.default.compare(data, encrypted);
    return isEqual;
}
exports.compareTwo = compareTwo;
