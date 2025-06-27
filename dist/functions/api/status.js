"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = status;
const utils_1 = require("../../utils");
async function status() {
    try {
        return await (0, utils_1.loopyFetch)("https://api.loopy5418.dev/health", 3000) === "OK";
    }
    catch (e) {
        return false;
    }
}
;
//# sourceMappingURL=status.js.map