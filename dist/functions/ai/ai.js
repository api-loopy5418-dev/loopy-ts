"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiGenerate = aiGenerate;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config({ path: ".env_loopy" });
async function aiGenerate(prompt, speed) {
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
    return await axios_1.default.get(`https://api.loopy5418.dev/openai/text?prompt=${text}&speed=${fast}&key=${key}`);
}
//# sourceMappingURL=ai.js.map