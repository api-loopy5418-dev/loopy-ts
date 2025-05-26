"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asciiArt = asciiArt;
const axios_1 = __importDefault(require("axios"));
async function asciiArt(text) {
    if (text === undefined)
        return "LoopyError: asciiArt expected to get string for text.";
    const ascii = encodeURIComponent(text);
    return await axios_1.default.get(`https://api.loopy5418.dev/ascii-art?text=${ascii}`);
}
;
//# sourceMappingURL=asciiArt.js.map