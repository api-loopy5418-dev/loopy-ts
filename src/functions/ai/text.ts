import { loopyFetch, getApiKey } from "../../utils";
import * as e from "../../errors";

interface IAiGenerateOptions {
  prompt: string;
  speed: number;
}

const speedMap: Record<number, string> = {
  0: "large",
  1: "balanced",
  2: "fast"
};

export async function text(prompt: string, speed: number): Promise<any>;
export async function text(options: IAiGenerateOptions): Promise<any>;
export async function text(prompt: string | IAiGenerateOptions, speed?: number): Promise<any> {
  let overloads: Partial<IAiGenerateOptions> = {};

  if (typeof prompt === "string") {
    overloads.prompt = prompt;
    overloads.speed = typeof speed === "undefined" ? 1 : speed;
  } else if (typeof prompt === "object") {
    overloads.prompt = prompt.prompt;
    overloads.speed = typeof prompt.speed === "undefined" ? 1 : prompt.speed;
  } else {
    throw new e.InvalidArgError(`LoopyError: AI.generate.text expected string or object but got ${typeof prompt}`);
  }

  if (typeof overloads.prompt !== "string") {
    throw new e.InvalidArgError(`LoopyError: AI.generate.text expected string for prompt but got ${typeof overloads.prompt}`);
  }
  if (typeof overloads.speed !== "number" || !(overloads.speed in speedMap)) {
    throw new e.InvalidArgError(`LoopyError: AI.generate.text expected 0, 1, or 2 for speed but got ${overloads.speed}`);
  }

  return await loopyFetch.post(
    `https://api.loopy5418.dev/openai/text`,
    20000,
    {
      'prompt': overloads.prompt,
      'speed': speedMap[overloads.speed]
    },
    {
      'api-key': await getApiKey()
    }
  );
}
