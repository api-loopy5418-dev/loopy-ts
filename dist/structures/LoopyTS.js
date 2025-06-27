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
exports.LoopyTS = LoopyTS;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const utils_1 = require("../utils");
const e = __importStar(require("../errors"));
let key;
let popmsg = "LoopyTS: API Key is missing, enter it here. [key/cancel]: ";
let content;
/*
* The logic to add API Key
*/
function writeKey(apiKey) {
    /*
    * Create an env file
    * Add the API Key as the content
    */
    try {
        fs_1.default.writeFileSync('.env_loopy', `KEY=${apiKey}`);
    }
    catch (err) {
        throw new e.UnexpectedError(`LoopyTSError: Couldn't generate file/add API key, ${err.message}`);
    }
    console.log("LoopyTS: Created an file and added API key.");
}
function appendKey(apiKey) {
    /*
    * Add API Key to the existing file
    */
    try {
        fs_1.default.appendFileSync(".env_loopy", `\nKEY=${apiKey}`);
    }
    catch (err) {
        throw new e.UnexpectedError(`LoopyTSError: Couldn't add the new API key, ${err.message}`);
    }
    console.log("LoopyTS: Appended API key.");
}
function replaceKey(apiKey) {
    /*
    * Replace the existing API Key with the new one
    */
    let content = "";
    try {
        content = fs_1.default.readFileSync('.env_loopy', 'utf-8');
    }
    catch (err) {
        throw new e.UnexpectedError(`LoopyTSError: Couldn't read '.env_loopy' file, ${err.message}`);
    }
    try {
        content = content.replace(/^KEY=.*/m, `KEY=${apiKey}`);
    }
    catch (err) {
        throw new e.UnexpectedError(`LoopyTSError: Couldn't change the API key, ${err.message}`);
    }
    try {
        fs_1.default.writeFileSync('.env_loopy', content, 'utf-8');
    }
    catch (err) {
        throw new e.UnexpectedError(`LoopyTSError: Couldn't add the changed API key, ${err.message}`);
    }
    console.log("LoopyTS: Replaced API key with the new one.");
}
/*
* Pop-up if you don't enter your key
*/
async function askForKey() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    /*
    * Enter API Key in the console if you forgot to add it in the options
    */
    return new Promise((resolve) => {
        rl.question(popmsg, async (a) => {
            const ans = a?.trim();
            if (ans === "cancel" || ans === undefined) {
                console.log("LoopyTS: Keep in mind some functions won't work.");
                rl.close();
                return resolve(undefined);
            }
            /*
            * Checking if API Key is valid
            */
            const res = await (0, utils_1.loopyFetch)(`https://api.loopy5418.dev/check-api-key?api-key=${ans}`, 7000);
            if (!res.exists) {
                popmsg = "LoopyTS: That's an invalid API key, try again. [key/cancel]: ";
                rl.close();
                askForKey().then(resolve);
            }
            else {
                console.log("LoopyTS: Valid key, going to the next step.");
                rl.close();
                resolve(ans);
            }
        });
    });
}
/*
* Function to change the pop-up message
*/
function invalidKey() {
    popmsg = "LoopyTS: That's an invalid API key, try again. [key/cancel]: ";
    askForKey();
}
async function LoopyTS(options) {
    if (!options?.suppressKeyPopup) {
        if (options?.key == undefined) {
            key = await askForKey();
        }
    }
    if (options?.key) {
        const res = await (0, utils_1.loopyFetch)(`https://api.loopy5418.dev/check-api-key?api-key=${options?.key}`, 7000);
        if (!res.exists) {
            key = await askForKey();
        }
        else {
            console.log("LoopyTS: Valid key, going to the next step.");
            key = options?.key;
        }
    }
    if (key !== undefined) {
        if (fs_1.default.existsSync(".env_loopy")) {
            dotenv_1.default.config({ path: ".env_loopy" });
            const exKey = process.env.KEY;
            /*
            * Add the new key
            */
            if (!exKey) {
                appendKey(key);
            }
            else {
                replaceKey(key);
            }
        }
        else {
            writeKey(key);
        }
    }
}
//# sourceMappingURL=LoopyTS.js.map