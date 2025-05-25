"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.qrCode = qrCode;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config({ path: ".env_loopy" });
async function qrCode(text) {
    if (text === undefined)
        return "LoopyError: qrCode expected a string for text";
    if (!fs_1.default.existsSync(".env_loopy"))
        return "LoopyError: API Key file not found";
    dotenv_1.default.config({ path: ".env_loopy" });
    const key = process.env.KEY;
    if (!key)
        return "LoopyError: API Key was not found.";
    const qr = encodeURIComponent(text);
    return await axios_1.default.get(`https://api.loopy5418.dev/qr?data=${qr}&key=${key}`);
}
//# sourceMappingURL=qrCode.js.map