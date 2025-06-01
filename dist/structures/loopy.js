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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopy = loopy;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const e = __importStar(require("../errors"));
function loopy(options) {
    if (options.apiKey === undefined)
        throw new e.ApiKeyMissingError("LoopyError: Can't set up the package without an API key.");
    if (fs_1.default.existsSync(".env_loopy")) {
        dotenv_1.default.config({ path: ".env_loopy" });
        const key = process.env.KEY;
        if (!key) {
            try {
                fs_1.default.appendFileSync(".env_loopy", `\nKEY=${options.apiKey}`);
            }
            catch (err) {
                throw new e.UnexpectedError(`LoopyError: Couldn't add the new API key, ${err.message}`);
            }
        }
        else {
            let content = "";
            try {
                let content = fs_1.default.readFileSync('.env_loopy', 'utf-8');
            }
            catch (err) {
                throw new e.UnexpectedError(`LoopyError: Couldn't read '.env_loopy' file, ${err.message}`);
            }
            try {
                content = content.replace(/^KEY=.*/m, `KEY=${options.apiKey}`);
            }
            catch (err) {
                throw new e.UnexpectedError(`LoopyError: Couldn't change the API key, ${err.message}`);
            }
            try {
                fs_1.default.writeFileSync('.env_loopy', content, 'utf-8');
            }
            catch (err) {
                throw new e.UnexpectedError(`LoopyError: Couldn't add the changed API key, ${err.message}`);
            }
        }
    }
    else {
        try {
            fs_1.default.writeFileSync('.env_loopy', `KEY=${options.apiKey}`);
        }
        catch (err) {
            throw new e.UnexpectedError(`LoopyError: Couldn't generate file/add API key, ${err.message}`);
        }
    }
}
//# sourceMappingURL=loopy.js.map