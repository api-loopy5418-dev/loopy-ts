"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyConverter = currencyConverter;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config({ path: ".env_loopy" });
async function currencyConverter(base, target, amount) {
    if (base === undefined)
        return "LoopyError: currencyConveter expected a string for base";
    if (target === undefined)
        return "LoopyError: currencyConveter expected a string for target";
    if (amount === undefined || Number.isNaN(amount))
        return "LoopyError: currencyConveter expected a number for amount";
    if (!fs_1.default.existsSync(".env_loopy"))
        return "LoopyError: API Key file not found";
    dotenv_1.default.config({ path: ".env_loopy" });
    const key = process.env.KEY;
    if (!key)
        return "LoopyError: API Key was not found.";
    const money = encodeURIComponent(amount);
    return await axios_1.default.get(`https://api.loopy5418.dev/currency-converter?base=${base}&target=${target}&amount=${money}&key=${key}`);
}
//# sourceMappingURL=currencyConverter.js.map