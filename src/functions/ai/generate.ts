import { loopyFetch, getApiKey } from "../../utils"
import dotenv from 'dotenv'
import fs from 'fs'
import * as e from "../../errors"

/*
* Options for it no way
*/
interface IAiGenerateOptions {
  prompt: string;
  speed: number;
}

/*
* Finally a gf to talk to!
*/

/*
* overloads variable setup
*/
interface IOverloadsOptions {
  prompt: string;
  speed: number;
}

/*
* Overloads (i think)
*/
export async function aiGenerate(prompt: string, speed: number): Promise<void>;
export async function aiGenerate(options: IAiGenerateOptions): Promise<void>;
export async function aiGenerate(prompt: string | IAiGenerateOptions, speed?: number): Promise<void> {
  let overloads: Partial<IOverloadsOptions> = {}
  const speedMap: Record<number, string> = {
    0: "large",
    1: "balanced",
    2: "fast"
  }

  /*
  * Setting up
  */
  if (typeof prompt === "string") {
    overloads.prompt = prompt
    if (typeof speed === "undefined") {
      overloads.speed = 1
    } else if (typeof speed !== "number") {
      throw new e.InvalidArgError(`LoopyError: aiGenerate expected a number for speed got ${typeof speed}`)
    } else if (typeof speedMap[speed] === "undefined") {
      throw new e.InvalidArgError(`LoopyError: aiGenerate expected 0, 1 or 2 for speed but got ${speed}`)
    } else {
      overloads.speed = speed
    }
  } else if (typeof prompt === 'object') {
    if (typeof prompt.prompt === "undefined") {
      throw new e.InvalidArgError(`LoopyError: aiGenerate expected a string for prompt but got ${typeof prompt.prompt}`)
    } else {
      overloads.prompt = prompt.prompt
    }
      if (typeof prompt.speed === "undefined") {
      overloads.speed = 1
    } else if (typeof prompt.speed !== "number") {
      throw new e.InvalidArgError(`LoopyError: aiGenerate expected a number for speed got ${typeof prompt.speed}`)
    } else if (typeof speedMap[prompt.speed] === "undefined") {
      throw new e.InvalidArgError(`LoopyError: aiGenerate expected 0, 1 or 2 for speed but got ${prompt.speed}`)
    } else {
      overloads.speed = prompt.speed
    }
  } else {
    throw new e.InvalidArgError(`LoopyError: aiGenerate expected string for prompt or object but got ${typeof prompt}`)
  }

  /*
  * Make request
  */
  return await loopyFetch(`https://api.loopy5418.dev/openai/text?prompt=${encodeURIComponent(overloads.prompt)}&speed=${speedMap[overloads.speed]}`, 20000, {
    'api-key': await getApiKey()
  });
}
