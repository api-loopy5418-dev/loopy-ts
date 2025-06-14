"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStatus = checkStatus;
const axios_1 = __importDefault(require("axios"));
async function checkStatus() {
    let result;
    try {
        result = await axios_1.default.get("https://api.loopy5418.dev/health", {
            timeout: 3000,
        });
    }
    catch (e) {
        result = { data: false };
    }
    return result?.data == "OK";
}
;
//# sourceMappingURL=checkStatus.js.map