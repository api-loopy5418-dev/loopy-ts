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
exports.loopyFetch = loopyFetch;
const e = __importStar(require("../errors"));
async function get(url, timeout, header) {
    const controller = new AbortController();
    const time = setTimeout(() => controller.abort(), timeout);
    try {
        const res = await fetch(url, {
            signal: controller.signal,
            headers: header
        });
        clearTimeout(time);
        const body = await res.text();
        return Promise.resolve().then(() => JSON.parse(body)).catch(() => body);
    }
    catch (err) {
        clearTimeout(time);
        throw new e.UnexpectedError(`Couldn't make a request, ${err.message}`);
    }
}
async function post(url, timeout, body, header) {
    const controller = new AbortController();
    const time = setTimeout(() => controller.abort(), timeout);
    const headers = {
        "Content-Type": "application/json",
        ...header,
    };
    try {
        const res = await fetch(url, {
            method: "POST",
            signal: controller.signal,
            headers,
            body: JSON.stringify(body),
        });
        clearTimeout(time);
        return await res.json();
    }
    catch (err) {
        clearTimeout(time);
        throw new e.UnexpectedError(`Couldn't make a request, ${err.message}`);
    }
}
async function loopyFetch(url, timeout, header) {
    return get(url, timeout, header);
}
loopyFetch.post = post;
//# sourceMappingURL=loopyFetch.js.map