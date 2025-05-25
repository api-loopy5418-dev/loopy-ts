"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiKey = getApiKey;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
function getApiKey() {
    if (!fs_1.default.existsSync(".env_loopy"))
        return "LoopyError: getApiKey couldn't find API Key file";
    dotenv_1.default.config({ path: ".env_loopy" });
    const key = process.env.KEY;
    if (!key)
        return "LoopyError: getApiKey couldn't find API Key";
    return key;
}
;
//# sourceMappingURL=getApiKey.js.map