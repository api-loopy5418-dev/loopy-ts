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
exports.image = image;
const utils_1 = require("../../utils");
const e = __importStar(require("../../errors"));
async function image(prompt, canvas) {
    let overloads = {};
    if (typeof prompt === "string") {
        overloads.prompt = prompt;
        overloads.canvas = (() => {
            if (canvas === "landscape" || canvas === "portrait" || canvas === "square" || canvas === undefined) {
                return canvas || "square";
            }
            throw new e.InvalidArgError("Invalid canvas argument");
        })();
    }
    else if (typeof prompt === "object") {
        overloads.prompt = prompt.prompt;
        overloads.canvas = (() => {
            if (prompt.canvas === "landscape" || prompt.canvas === "portrait" || prompt.canvas === "square" || prompt.canvas === undefined) {
                return prompt.canvas || "square";
            }
            throw new e.InvalidArgError("Invalid canvas argument");
        })();
    }
    else {
        throw new e.InvalidArgError(`LoopyError: prompt expected string or object but got ${typeof prompt}`);
    }
    if (typeof overloads.prompt !== "string") {
        throw new e.InvalidArgError(`LoopyError: prompt must be string`);
    }
    return await (0, utils_1.loopyFetch)(`https://api.loopy5418.dev/openai/image?prompt=${encodeURIComponent(overloads.prompt)}&canvas=${overloads.canvas}`, 20000, {
        'api-key': await (0, utils_1.getApiKey)()
    });
}
//# sourceMappingURL=image.js.map