"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoopyTS = LoopyTS;
const readline_1 = __importDefault(require("readline"));
const utils_1 = require("../utils");
let key;
let popmsg = "LoopyTS: API Key is missing, enter it here. [key/cancel]: ";
/*
* The logic to add API Key
*/
function writeKey(apiKey) {
    /*
    * Create an env file
    * Add the API Key as the content
    */
}
function appendKey(apiKey) {
    /*
    * Add API Key to the existing file
    */
}
function replaceKey(apiKey) {
    /*
    * Replace the existing API Key with the new one
    */
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
    rl.question(popmsg, async (a) => {
        const ans = a?.trim();
        if (ans === "cancel" || ans === undefined) {
            console.log("LoopyTS: Keep in mind some functions won't work.");
        }
        /*
        * Checking if API Key is valid
        */
        const res = await (0, utils_1.loopyFetch)(`https://api.loopy5418.dev/check-api-key?key=${ans}`, 7000);
        if (!res.exists && ans !== "cancel" && ans !== undefined) {
            invalidKey();
        }
        else {
            console.log("LoopyTS: Valid key, going to the next step.");
            key = ans;
            rl.close();
        }
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
            askForKey();
        }
    }
    if (options?.key) {
        const res = await (0, utils_1.loopyFetch)(`https://api.loopy5418.dev/check-api-key?key=${options?.key}`, 7000);
        if (!res.exists) {
            invalidKey();
        }
        else {
            console.log("LoopyTS: Valid key, going to the next step.");
            key = options?.key;
        }
    }
}
//# sourceMappingURL=LoopyTS.js.map