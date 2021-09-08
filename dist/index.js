"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectToDB_1 = __importDefault(require("./utils/connectToDB"));
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
connectToDB_1.default();
app.use(index_1.default);
app.listen(process.env.PORT, () => console.log("I'm alive! 🤖 --> http://localhost:3333"));
