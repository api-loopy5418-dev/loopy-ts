"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiKey = getApiKey;
require("reflect-metadata");
const LoopyDatabase_1 = require("../structures/LoopyDatabase");
const Key_1 = require("../entity/Key");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
console.log("🔍 DB Used:", fs_1.default.existsSync(path_1.default.resolve("./database/database.sqlite")), path_1.default.resolve("./database/database.sqlite"));
async function getApiKey() {
    const data = LoopyDatabase_1.AppDataSource.getRepository(Key_1.Key);
    const a = await data.find();
    console.log("FOUND ROWS:", a);
    const res = a[0] ?? null;
    if (!res)
        return "none";
    return res.key;
}
//# sourceMappingURL=getApiKey.js.map