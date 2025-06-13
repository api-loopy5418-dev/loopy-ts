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
export function aiGenerate(prompt: string, speed: number): void;
export function aiGenerate(options: IAiGenerateOptions): void;
export function aiGenerate(prompt: string | IAiGenerateOptions, speed?: number): void {
  let overloads: Partial<IOverloadsOptions> = {}
  const speedMap: Record<number, string> = {
    0: "large",
    1: "balanced",
    2: "fast"
  }

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
    overloads.prompt = prompt.prompt
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

  console.log(`Prompt: ${overloads.prompt} 
Speed: ${overloads.speed}`);
}
