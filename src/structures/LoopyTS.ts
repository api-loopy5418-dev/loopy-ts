"use strict"

import dotenv from "dotenv"
import fs from "fs"
import readline from "readline"
import { loopyFetch } from "../utils"
import * as e from "../errors"   

/*
* Setting up options & variables
*/
interface ILoopyOptions {
  key: string;
  suppressKeyPopup: boolean;
}
let key;
let popmsg = "LoopyTS: API Key is missing, enter it here. [key/cancel]: "
let content;

/*
* The logic to add API Key
*/

function writeKey(apiKey: string) {
/*
* Create an env file
* Add the API Key as the content
*/
}

function appendKey(apiKey: string) {
/*
* Add API Key to the existing file
*/
}

function replaceKey(apiKey: string) {
/*
* Replace the existing API Key with the new one
*/
}

/*
* Pop-up if you don't enter your key
*/
async function askForKey() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  /*
  * Enter API Key in the console if you forgot to add it in the options
  */
  rl.question(popmsg, async (a) => {
    const ans = a?.trim()
    if (ans === "cancel" || ans === undefined) {
      console.log("LoopyTS: Keep in mind some functions won't work.")
    }
    /*
    * Checking if API Key is valid
    */
    const res = await loopyFetch(`https://api.loopy5418.dev/check-api-key?key=${ans}`, 7000)
    if (!res.exists && ans !== "cancel" && ans !== undefined) {
      invalidKey()
    } else {
      console.log("LoopyTS: Valid key, going to the next step.")
      key = ans
      rl.close()
    }
  });
}
/*
* Function to change the pop-up message
*/ 
function invalidKey() {
  popmsg = "LoopyTS: That's an invalid API key, try again. [key/cancel]: "
  askForKey()
}
export async function LoopyTS(options: ILoopyOptions): Promise<void> {
  if (!options?.suppressKeyPopup) {
    if (options?.key == undefined) {
      askForKey()
    }
  }
  if (options?.key) {
    const res = await loopyFetch(`https://api.loopy5418.dev/check-api-key?key=${options?.key}`, 7000)
    if (!res.exists) {
      invalidKey()
    } else {
      console.log("LoopyTS: Valid key, going to the next step.")
      key = options?.key
    }
  }
  if (key !== undefined) {
    if (fs.existsSync(".env_loopy")) {
      dotenv.config({ path: ".env_loopy" });
      const exKey: string | null | undefined = process.env.KEY
      /*
      * Add the new key
      */
      if (!exKey) {
        appendKey(key)
      } else {
        replaceKey(key)
      }
    } else {
      writeKey(key)
    }
  }
}
