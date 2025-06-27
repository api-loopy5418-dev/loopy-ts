"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.temp = temp;
const utils_1 = require("../../utils");
async function temp(newKeyValue) {
    utils_1.Database.set("Key", newKeyValue);
}
//# sourceMappingURL=temp.js.map