"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SessionController_1 = __importDefault(require("../controllers/SessionController"));
const sessionRouter = express_1.Router();
sessionRouter.post('/', async (request, response) => {
    const { password, username, email } = request.body;
    await SessionController_1.default.create({
        password, username, email
    });
    return response.status(204).send('Rota de login');
});
exports.default = sessionRouter;
