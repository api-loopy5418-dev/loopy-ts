"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setApiKey = setApiKey;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
function setApiKey(key) {
    if (key === undefined)
        return "LoopyError: setApiKey expected to get API Key argument.";
    if (fs_1.default.existsSync(".env_loopy")) {
        dotenv_1.default.config({ path: ".env_loopy" });
        const key2 = process.env.KEY;
        if (!key2) {
            fs_1.default.appendFileSync(".env_loopy", `\nKEY=${key}`);
        }
        else {
            let c = fs_1.default.readFileSync('.env_loopy', 'utf-8');
            c = c.replace(/^KEY=.*/m, `KEY=${key}`);
            fs_1.default.writeFileSync('.env_loopy', c, 'utf-8');
        }
    }
    else {
        fs_1.default.writeFileSync('.env_loopy', `KEY=${key}`);
    }
}
