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
exports.aiGenerate = aiGenerate;
const utils_1 = require("../../utils");
const e = __importStar(require("../../errors"));
async function aiGenerate(prompt, speed) {
    let overloads = {};
    const speedMap = {
        0: "large",
        1: "balanced",
        2: "fast"
    };
    /*
    * Setting up
    */
    if (typeof prompt === "string") {
        overloads.prompt = prompt;
        if (typeof speed === "undefined") {
            overloads.speed = 1;
        }
        else if (typeof speed !== "number") {
            throw new e.InvalidArgError(`LoopyError: aiGenerate expected a number for speed got ${typeof speed}`);
        }
        else if (typeof speedMap[speed] === "undefined") {
            throw new e.InvalidArgError(`LoopyError: aiGenerate expected 0, 1 or 2 for speed but got ${speed}`);
        }
        else {
            overloads.speed = speed;
        }
    }
    else if (typeof prompt === 'object') {
        if (typeof prompt.prompt === "undefined") {
            throw new e.InvalidArgError(`LoopyError: aiGenerate expected a string for prompt but got ${typeof prompt.prompt}`);
        }
        else {
            overloads.prompt = prompt.prompt;
        }
        if (typeof prompt.speed === "undefined") {
            overloads.speed = 1;
        }
        else if (typeof prompt.speed !== "number") {
            throw new e.InvalidArgError(`LoopyError: aiGenerate expected a number for speed got ${typeof prompt.speed}`);
        }
        else if (typeof speedMap[prompt.speed] === "undefined") {
            throw new e.InvalidArgError(`LoopyError: aiGenerate expected 0, 1 or 2 for speed but got ${prompt.speed}`);
        }
        else {
            overloads.speed = prompt.speed;
        }
    }
    else {
        throw new e.InvalidArgError(`LoopyError: aiGenerate expected string for prompt or object but got ${typeof prompt}`);
    }
    /*
    * Make request
    */
    return await (0, utils_1.loopyFetch)(`https://api.loopy5418.dev/openai/text?prompt=${encodeURIComponent(overloads.prompt)}&speed=${speedMap[overloads.speed]}`, 20000, {
        'api-key': await (0, utils_1.getApiKey)()
    });
}
//# sourceMappingURL=generate.js.map