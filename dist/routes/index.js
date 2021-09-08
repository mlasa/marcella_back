"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_1 = __importDefault(require("./posts"));
const profile_1 = __importDefault(require("./profile"));
const session_1 = __importDefault(require("./session"));
const user_1 = __importDefault(require("./user"));
const router = express_1.Router();
router.get('/', async (request, response) => {
    return response.status(200).json({ apiWorking: 'Tudo suave' });
});
router.use('/posts', posts_1.default);
router.use('/profile', profile_1.default);
router.use('/session', session_1.default);
router.use('/user', user_1.default);
exports.default = router;
