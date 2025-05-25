"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owoifyText = owoifyText;
const axios_1 = __importDefault(require("axios"));
async function owoifyText(text) {
    if (text === undefined)
        return "LoopyError: owoifyText expected a text.";
    const uwu = encodeURIComponent(text);
    return await axios_1.default.get(`https://api.loopy5418.dev/owoify?text=${uwu}`);
}
;
//# sourceMappingURL=owoifyText.js.map