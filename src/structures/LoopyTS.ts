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
let key: string | undefined;
let popmsg = "LoopyTS: API Key is missing, enter it here. [key/cancel]: "
let content: string;

/*
* The logic to add API Key
*/

function writeKey(apiKey: string) {
  /*
  * Create an env file
  * Add the API Key as the content
  */
  try {
    fs.writeFileSync('.env_loopy', `KEY=${apiKey}`)
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyTSError: Couldn't generate file/add API key, ${err.message}`)
  }
  console.log("LoopyTS: Created an file and added API key.")
}

function appendKey(apiKey: string) {
/*
* Add API Key to the existing file
*/
  try {
    fs.appendFileSync(".env_loopy", `\nKEY=${apiKey}`)
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyTSError: Couldn't add the new API key, ${err.message}`)
  }
  console.log("LoopyTS: Appended API key.")
}

function replaceKey(apiKey: string) {
  /*
  * Replace the existing API Key with the new one
  */
  let content = ""
  try {
    content = fs.readFileSync('.env_loopy', 'utf-8');
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyTSError: Couldn't read '.env_loopy' file, ${err.message}`)
  }
  try {
    content = content.replace(/^KEY=.*/m, `KEY=${apiKey}`);
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyTSError: Couldn't change the API key, ${err.message}`)
  }
  try {
    fs.writeFileSync('.env_loopy', content, 'utf-8')
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyTSError: Couldn't add the changed API key, ${err.message}`)
  }
  console.log("LoopyTS: Replaced API key with the new one.")
}

/*
* Pop-up if you don't enter your key
*/
async function askForKey(): Promise<string | undefined> {
  const rl = readline.createInterface({
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
      const res = await loopyFetch(`https://api.loopy5418.dev/check-api-key?api-key=${ans}`, 7000)

      if (!res.exists) {
        popmsg = "LoopyTS: That's an invalid API key, try again. [key/cancel]: ";
        rl.close();
        askForKey().then(resolve);
      } else {
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
  popmsg = "LoopyTS: That's an invalid API key, try again. [key/cancel]: "
  askForKey()
}
export async function LoopyTS(options: ILoopyOptions): Promise<void> {
  if (!options?.suppressKeyPopup) {
    if (options?.key == undefined) {
      key = await askForKey()
    }
  }
  if (options?.key) {
    const res = await loopyFetch(`https://api.loopy5418.dev/check-api-key?api-key=${options?.key}`, 7000)
    if (!res.exists) {
      key = await askForKey()
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
