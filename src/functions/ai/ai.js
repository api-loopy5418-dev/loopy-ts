"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiGenerate = aiGenerate;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config({ path: ".env_loopy" });
function aiGenerate(prompt, speed) {
    return __awaiter(this, void 0, void 0, function* () {
        if (prompt === undefined)
            return "LoopyError: aiGenerate expected a string for prompt";
        if (speed !== 0 && speed !== 1 && speed !== 2)
            return `LoopyError: aiGenerate expected to get 0, 1 or 2 for speed but got "${speed}"`;
        if (!fs_1.default.existsSync(".env_loopy"))
            return "LoopyError: API Key file not found";
        dotenv_1.default.config({ path: ".env_loopy" });
        const key = process.env.KEY;
        if (!key)
            return "LoopyError: API Key was not found.";
        const text = encodeURIComponent(prompt);
        const fastM = {
            0: "large",
            1: "balanced",
            2: "fast"
        };
        const fast = fastM[speed];
        return yield axios_1.default.get(`https://api.loopy5418.dev/openai/text?prompt=${text}&speed=${fast}&key=${key}`);
    });
}
