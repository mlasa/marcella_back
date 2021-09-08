"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const userRouter = express_1.Router();
userRouter.get('/', async (request, response) => {
    const user = await UserController_1.default.index();
    return response.status(200).json(user);
});
userRouter.post('/', async (request, response) => {
    const { name, username, email, password } = request.body;
    const user = await UserController_1.default.create({
        name, username, email, password
    });
    return response.status(200).json(user);
});
exports.default = userRouter;
