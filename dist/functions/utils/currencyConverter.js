"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyConverter = currencyConverter;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const e = __importStar(require("../../errors"));
async function currencyConverter(base, target, amount) {
    if (base === undefined)
        throw new e.MissingArgsError("LoopyError: currencyConveter expected a string for base");
    if (target === undefined)
        throw new e.MissingArgsError("LoopyError: currencyConveter expected a string for target");
    if (amount === undefined || Number.isNaN(amount))
        throw new e.InvalidArgError("LoopyError: currencyConveter expected a number for amount");
    if (!fs_1.default.existsSync(".env_loopy"))
        throw new e.FileNotFoundError("LoopyError: API Key file not found");
    dotenv_1.default.config({ path: ".env_loopy" });
    const key = process.env.KEY;
    if (!key)
        throw new e.ApiKeyMissingError("LoopyError: API Key was not found.");
    try {
        return await axios_1.default.get(`https://api.loopy5418.dev/currency-converter?base=${base}&target=${target}&amount=${encodeURIComponent(amount)}&key=${key}`, {
            timeout: 5000,
        });
    }
    catch (err) {
        throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${err.message}`);
    }
}
//# sourceMappingURL=currencyConverter.js.map