"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
const profileRouter = express_1.Router();
profileRouter.get('/', async (request, response) => {
    const profile = await ProfileController_1.default.index();
    return response.status(200).json(profile);
});
profileRouter.post('/', async (request, response) => {
    const { name, description, tags } = request.body;
    const profile = await ProfileController_1.default.create({
        name, description, tags
    });
    return response.status(200).json(profile);
});
profileRouter.put('/:id', async (request, response) => {
    const { name, description, tags } = request.body;
    const { id } = request.query;
    const profile = await ProfileController_1.default.update(id + '', {
        name, description, tags
    });
    return response.status(200).json(profile);
});
profileRouter.delete('/', async (request, response) => {
    const { id } = request.body;
    await ProfileController_1.default.remove(id);
    return response.status(202).send("O perfil foi excluído");
});
exports.default = profileRouter;
