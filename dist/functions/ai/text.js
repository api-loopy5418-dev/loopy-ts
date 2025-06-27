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
Object.defineProperty(exports, "__esModule", { value: true });
exports.text = text;
const utils_1 = require("../../utils");
const e = __importStar(require("../../errors"));
const speedMap = {
    0: "large",
    1: "balanced",
    2: "fast"
};
async function text(prompt, speed) {
    let overloads = {};
    if (typeof prompt === "string") {
        overloads.prompt = prompt;
        overloads.speed = typeof speed === "undefined" ? 1 : speed;
    }
    else if (typeof prompt === "object") {
        overloads.prompt = prompt.prompt;
        overloads.speed = typeof prompt.speed === "undefined" ? 1 : prompt.speed;
    }
    else {
        throw new e.InvalidArgError(`LoopyError: AI.generate.text expected string or object but got ${typeof prompt}`);
    }
    if (typeof overloads.prompt !== "string") {
        throw new e.InvalidArgError(`LoopyError: AI.generate.text expected string for prompt but got ${typeof overloads.prompt}`);
    }
    if (typeof overloads.speed !== "number" || !(overloads.speed in speedMap)) {
        throw new e.InvalidArgError(`LoopyError: AI.generate.text expected 0, 1, or 2 for speed but got ${overloads.speed}`);
    }
    return await utils_1.loopyFetch.post(`https://api.loopy5418.dev/openai/text`, 20000, {
        'prompt': overloads.prompt,
        'speed': speedMap[overloads.speed]
    }, {
        'api-key': await (0, utils_1.getApiKey)()
    });
}
//# sourceMappingURL=text.js.map