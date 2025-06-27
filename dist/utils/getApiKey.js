"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiKey = getApiKey;
const get_1 = require("./get");
async function getApiKey() {
    return (await (0, get_1.get)("Key"))?.key ?? "none";
}
//# sourceMappingURL=getApiKey.js.map