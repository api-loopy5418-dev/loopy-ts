"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seconds2Time = seconds2Time;
const axios_1 = __importDefault(require("axios"));
async function seconds2Time(seconds) {
    if (seconds === undefined || Number.isNaN(seconds))
        return "LoopyError: seconds2Time expected to get a number for seconds";
    return await axios_1.default.get(`https://api.loopy5418.dev/seconds-to-time?seconds=${seconds}`);
}
//# sourceMappingURL=seconds2Time.js.map